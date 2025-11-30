# repo-maintainer-template

A clean, well-structured open-source project template demonstrating best practices for repository maintenance, collaboration, and code review workflows.

## Overview

This project serves as a starter template for open-source repositories, showcasing:

- **Python utility** with proper testing
- **Web application** deployable via GitHub Pages
- **Comprehensive documentation** for contributors
- **Professional project structure** following industry standards

## Tech Stack

- **Python 3.x** - Core utility language
- **pytest** - Testing framework
- **HTML/CSS/JavaScript** - Web application
- **GitHub Pages** - Web hosting

## Project Structure

```
repo-maintainer-template/
│
├── src/
│   └── main.py                # Python utility (add_numbers function)
│
├── tests/
│   └── test_main.py           # Pytest test suite
│
├── web/                       # GitHub Pages deployment folder
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── README.md
├── requirements.txt
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE                    # MIT License
└── setup.py                   # Python packaging example
```

## Python Setup Instructions

### 1. Create a Virtual Environment

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Python Utility

```bash
python src/main.py
```

Expected output:
```
Sample calculation: add_numbers(10, 20) = 30.0
```

### 4. Run Tests

```bash
# Run all tests
pytest

# Run with verbose output
pytest -v

# Run with coverage (if pytest-cov is installed)
pytest --cov=src
```

## Web Application

🌐 **Live Demo**: The web application is running at:
- **Direct URL**: [https://subhadra-mishra-iub.github.io/repo-maintainer-template/web/index.html](https://subhadra-mishra-iub.github.io/repo-maintainer-template/web/index.html)
- **Alternative**: [https://subhadra-mishra-iub.github.io/repo-maintainer-template/](https://subhadra-mishra-iub.github.io/repo-maintainer-template/) (if configured correctly)

### Features

The web application includes three interactive sections:

1. **JavaScript Calculator** - Add two numbers using JavaScript
2. **Test Python Function** - Test the `add_numbers` function from `src/main.py` directly in your browser
3. **Run Python Tests** - Execute the full test suite from `tests/test_main.py` and see results

> **Note**: The Python testing features use Pyodide to run Python code in your browser. The Python runtime will load automatically when you visit the page (may take 10-30 seconds on first load).

### Local Development

**Option 1: Direct File Access**
1. Open `web/index.html` in your web browser
2. Note: Python features may not work with `file://` protocol - use Option 2 instead

**Option 2: Local Server (Recommended)**
```bash
# Python 3
cd web
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

This ensures all features work correctly, including Python testing.

### GitHub Pages Deployment

**Current Configuration:**
1. Go to your repository on GitHub: [https://github.com/Subhadra-Mishra-iub/repo-maintainer-template](https://github.com/Subhadra-Mishra-iub/repo-maintainer-template)
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/web`
4. Click **Save**

**Accessing Your Site:**
- After deployment, your site will be available at:
  - `https://subhadra-mishra-iub.github.io/repo-maintainer-template/web/index.html`
- If you want it at the root URL (`https://subhadra-mishra-iub.github.io/repo-maintainer-template/`), you can:
  - Option A: Change GitHub Pages source to `/ (root)` and move `web/` contents to root
  - Option B: Keep current setup and use the `/web/index.html` URL

> **Note**: It may take 1-5 minutes for the site to be available after the first deployment or after pushing changes.

## Screenshots

<!-- Add screenshots of your web app here -->
![Web Application Screenshot](screenshot.png)

## Future Improvements

- [ ] Add more mathematical operations (subtract, multiply, divide)
- [ ] Implement input validation with better error messages
- [ ] Add unit tests for the web application
- [ ] Create a CI/CD pipeline with GitHub Actions
- [ ] Add dark mode toggle
- [ ] Support for multiple languages
- [ ] Add keyboard shortcuts

## Contributing

Welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025, Subhadra Mishra

## Acknowledgments

- Built as a demonstration of open-source best practices
- Template designed for learning and collaboration

