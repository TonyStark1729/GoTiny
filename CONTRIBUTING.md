# Contributing to GoTiny

Thank you for your interest in contributing to GoTiny! We welcome contributions from everyone.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- Git
- A GitHub account

### Local Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/gotiny.git
   cd gotiny
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

## 📋 How to Contribute

### 🐛 Reporting Bugs

1. **Check existing issues** first to avoid duplicates
2. **Use the bug report template**
3. **Include detailed steps to reproduce**
4. **Add screenshots if applicable**
5. **Specify your environment** (OS, browser, Node.js version)

### ✨ Suggesting Features

1. **Check existing feature requests** first
2. **Use the feature request template**
3. **Explain the problem you're solving**
4. **Describe your proposed solution**
5. **Consider alternative solutions**

### 💻 Code Contributions

#### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

#### Development Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic

3. **Test your changes**
   ```bash
   npm start
   # Test manually in browser
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use the PR template
   - Link related issues
   - Add screenshots for UI changes

## 📝 Code Style Guidelines

### JavaScript
- Use ES6+ features
- Use `const` and `let` instead of `var`
- Use meaningful variable names
- Add JSDoc comments for functions
- Keep functions small and focused

### CSS
- Use consistent naming conventions
- Group related styles together
- Use CSS custom properties for repeated values
- Ensure mobile responsiveness

### HTML
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure accessibility standards

## 🧪 Testing

Currently, GoTiny uses manual testing. We welcome contributions to add:
- Unit tests
- Integration tests
- E2E tests

## 📖 Documentation

- Update README.md for significant changes
- Add JSDoc comments for new functions
- Update API documentation if applicable

## 🎯 Pull Request Guidelines

### Before Submitting
- [ ] Code follows project style guidelines
- [ ] Changes have been tested locally
- [ ] Documentation has been updated
- [ ] Branch is up to date with main

### PR Description Should Include
- **What** changes were made
- **Why** the changes were necessary
- **How** to test the changes
- **Screenshots** for UI changes
- **Breaking changes** if any

### Review Process
1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** by reviewers
4. **Merge** after approval

## 🏷️ Commit Message Format

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat: add QR code generation for shortened URLs
fix: resolve mobile responsive issues on iOS
docs: update installation instructions in README
style: format code according to ESLint rules
```

## 🌟 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributors page

## ❓ Questions?

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For general questions and ideas
- **Email**: For private inquiries

## 📜 Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

---

Thank you for contributing to GoTiny! 🎉
