# Contributing to repo-maintainer-template

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Getting Started

### Fork and Clone

1. **Fork the repository** by clicking the "Fork" button on GitHub
2. **Clone your fork** to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/repo-maintainer-template.git
cd repo-maintainer-template
```

3. **Add the upstream repository** (to sync with the original):

```bash
git remote add upstream https://github.com/subhadramishra/repo-maintainer-template.git
```

### Set Up Development Environment

1. Create a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

## Branch Naming Convention

When creating a new branch, use the following naming conventions:

- **Feature**: `feature/description-of-feature`
  - Example: `feature/add-subtraction-function`
- **Bug fix**: `fix/description-of-fix`
  - Example: `fix/input-validation-error`
- **Documentation**: `docs/description-of-docs`
  - Example: `docs/update-readme-instructions`
- **Refactoring**: `refactor/description-of-refactor`
  - Example: `refactor/improve-code-structure`

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Please format your commit messages as follows:

```
<type>: <subject>

[optional body]

[optional footer]
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config, etc.)

### Examples

```
feat: add subtraction function to main.py

fix: handle division by zero in calculator

docs: update README with deployment instructions

test: add test cases for negative numbers
```

## Development Workflow

1. **Create a branch** from `main`:

```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes** and commit them:

```bash
git add .
git commit -m "feat: your descriptive commit message"
```

3. **Run tests** before pushing:

```bash
pytest -v
```

4. **Push to your fork**:

```bash
git push origin feature/your-feature-name
```

5. **Create a Pull Request** on GitHub

## Testing Requirements

Before submitting a Pull Request, please ensure:

- ✅ All existing tests pass: `pytest`
- ✅ New features include appropriate test cases
- ✅ Code follows the existing style and conventions
- ✅ Documentation is updated if needed

## Pull Request Process

1. **Update your fork** with the latest changes from upstream:

```bash
git checkout main
git pull upstream main
git push origin main
```

2. **Rebase your feature branch** (if needed):

```bash
git checkout feature/your-feature-name
git rebase main
```

3. **Create a Pull Request** with:
   - Clear title and description
   - Reference to any related issues
   - Screenshots (if UI changes)

4. **Wait for review** - maintainers will review your PR and provide feedback

5. **Address feedback** - make requested changes and push updates to your branch

## Code Style

- Follow PEP 8 for Python code
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write self-documenting code when possible

## Questions?

If you have questions or need help, please:

- Open an issue on GitHub
- Check existing issues and discussions
- Reach out to maintainers

Thank you for contributing! 🎉

