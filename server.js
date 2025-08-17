const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory storage for simplified version
const urlDatabase = new Map();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Generate random short code
const generateShortCode = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Validate URL
const isValidUrl = (string) => {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};

// API Routes
app.post('/api/shorten', (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: 'URL is required' });
    }

    if (!isValidUrl(originalUrl)) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    // Check if URL already exists
    for (const [shortCode, data] of urlDatabase.entries()) {
      if (data.originalUrl === originalUrl) {
        return res.json({
          shortUrl: `${req.protocol}://${req.get('host')}/${shortCode}`,
          originalUrl: originalUrl,
          shortCode: shortCode,
          createdAt: data.createdAt,
          clicks: data.clicks
        });
      }
    }

    // Generate new short code
    let shortCode;
    do {
      shortCode = generateShortCode();
    } while (urlDatabase.has(shortCode));

    // Store in database
    const urlData = {
      originalUrl: originalUrl,
      shortCode: shortCode,
      createdAt: new Date(),
      clicks: 0
    };

    urlDatabase.set(shortCode, urlData);

    res.json({
      shortUrl: `${req.protocol}://${req.get('host')}/${shortCode}`,
      originalUrl: originalUrl,
      shortCode: shortCode,
      createdAt: urlData.createdAt,
      clicks: urlData.clicks
    });

  } catch (error) {
    console.error('Error shortening URL:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Redirect route
app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;

  if (!urlDatabase.has(shortCode)) {
    return res.status(404).send(`
      <html>
        <head>
          <title>URL Not Found - GoTiny</title>
          <meta charset="utf-8">
          <style>
            body { font-family: system-ui, sans-serif; text-align: center; padding: 50px; background: #0f172a; color: white; }
            .container { max-width: 400px; margin: 0 auto; }
            h1 { color: #3b82f6; }
            a { color: #3b82f6; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🔗 URL Not Found</h1>
            <p>The short URL you're looking for doesn't exist.</p>
            <p><a href="/">← Go back to GoTiny</a></p>
          </div>
        </body>
      </html>
    `);
  }

  const urlData = urlDatabase.get(shortCode);
  urlData.clicks += 1;

  res.redirect(302, urlData.originalUrl);
});

// Get URL stats
app.get('/api/stats/:shortCode', (req, res) => {
  const { shortCode } = req.params;

  if (!urlDatabase.has(shortCode)) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  const urlData = urlDatabase.get(shortCode);
  res.json(urlData);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 GoTiny server running on port ${PORT}`);
  console.log(`📱 Open http://localhost:${PORT} in your browser`);
});
