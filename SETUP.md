# 🎯 Complete Setup Guide for MadeForAI

This guide will get you from zero to deployed in under 10 minutes!

## Quick Start (5 minutes)

```bash
# 1. Clone repository
git clone https://github.com/madeforai/madeforai.git
cd madeforai

# 2. Install dependencies
pip install -r requirements.txt

# 3. Test locally
mkdocs serve

# 4. Open browser to http://127.0.0.1:8000
# ✅ Done! Your site is running!
```

## Detailed Setup

### Option 1: Quick Deploy to GitHub Pages

**Best for**: Quick deployment, no local setup needed

1. **Fork the repository** on GitHub
2. Go to **Settings** > **Pages**
3. Under **Build and deployment**, select **GitHub Actions**
4. Your site will auto-deploy to `https://YOUR_USERNAME.github.io/madeforai/`

### Option 2: Local Development

**Best for**: Customization and content creation

#### Step 1: Install Python

Check if Python is installed:
```bash
python --version  # Should be 3.8+
```

If not installed, download from [python.org](https://www.python.org/downloads/)

#### Step 2: Clone Repository

```bash
git clone https://github.com/madeforai/madeforai.git
cd madeforai
```

#### Step 3: Create Virtual Environment (Recommended)

```bash
# Create venv
python -m venv venv

# Activate it
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

You should see `(venv)` in your terminal.

#### Step 4: Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

This installs:
- MkDocs
- Material theme
- Jupyter integration
- All plugins

#### Step 5: Run Locally

```bash
mkdocs serve
```

Open http://127.0.0.1:8000 in your browser!

### Option 3: Using Docker

**Best for**: Consistent environment, no Python setup

```bash
# Pull the image
docker pull squidfunk/mkdocs-material

# Run the container
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

Open http://localhost:8000

## Customization

### 1. Update Site Information

Edit `mkdocs.yml`:

```yaml
site_name: Your Site Name
site_url: https://your-domain.com
site_author: Your Name
site_description: Your Description

repo_url: https://github.com/YOUR_USERNAME/YOUR_REPO
```

### 2. Change Colors

Edit `docs/stylesheets/extra.css`:

```css
:root {
  /* Change these to your brand colors */
  --md-primary-fg-color: #YOUR_PRIMARY_COLOR;
  --md-accent-fg-color: #YOUR_ACCENT_COLOR;
}
```

Popular color schemes:
- **Tech Blue**: Primary: `#2563EB`, Accent: `#06B6D4`
- **Purple Gradient**: Primary: `#8B5CF6`, Accent: `#EC4899`
- **Green Energy**: Primary: `#10B981`, Accent: `#3B82F6`

### 3. Update Logo and Favicon

Replace these files:
- `docs/assets/images/logo.svg` - Your logo
- `docs/assets/images/favicon.png` - Browser icon

Create favicon from logo:
```bash
# Using ImageMagick
convert logo.svg -resize 32x32 favicon.png
```

### 4. Configure Newsletter

Get Mailchimp account (free tier available):
1. Sign up at [mailchimp.com](https://mailchimp.com)
2. Create audience
3. Get form action URL
4. Update `docs/index.md` newsletter section

### 5. Setup Discord

Create Discord server:
1. Create server at [discord.com](https://discord.com)
2. Enable community features
3. Create invite link
4. Update all Discord links in the site

## Adding Content

### Add a New Notebook

1. Create `.ipynb` file in appropriate directory:
```bash
# Example: Create new ML tutorial
touch docs/ml-basics/linear-regression.ipynb
```

2. Add metadata cell at top:
```markdown
# Linear Regression Tutorial

Learn the fundamentals of linear regression...

<div class="colab-button">
  <a href="https://colab.research.google.com/github/YOUR_USERNAME/YOUR_REPO/blob/main/docs/ml-basics/linear-regression.ipynb">
    Open in Colab
  </a>
</div>
```

3. Update `mkdocs.yml` navigation:
```yaml
nav:
  - ML Basics:
    - ml-basics/index.md
    - Linear Regression: ml-basics/linear-regression.ipynb  # Add this
```

4. Commit and push:
```bash
git add docs/ml-basics/linear-regression.ipynb mkdocs.yml
git commit -m "Add linear regression tutorial"
git push
```

Site updates automatically!

### Add a Markdown Page

1. Create `.md` file:
```bash
touch docs/resources/cheat-sheets.md
```

2. Add content:
```markdown
# Cheat Sheets

Quick reference guides...

## Python Cheat Sheet
...
```

3. Update navigation in `mkdocs.yml`

### Add Images

```bash
# Add to docs/assets/images/
cp my-image.png docs/assets/images/

# Reference in markdown
![Alt text](../../assets/images/my-image.png)
```

## Testing

### Test Locally

```bash
# Serve and watch for changes
mkdocs serve

# Open http://127.0.0.1:8000
# Make changes - site auto-reloads!
```

### Test Build

```bash
# Build production version
mkdocs build --strict

# Test the built site
cd site
python -m http.server 8000
```

### Check for Errors

```bash
# Strict mode - fails on warnings
mkdocs build --strict --verbose

# Check links
# (requires linkchecker)
pip install linkchecker
linkchecker http://127.0.0.1:8000
```

## Deployment

### GitHub Pages (Automated)

Already configured! Just push to `main`:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions will:
1. ✅ Build the site
2. ✅ Run tests
3. ✅ Deploy to Pages
4. ✅ Site live in ~2-3 minutes

### Manual Deployment

```bash
# Build
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy --force
```

### Custom Domain

1. Add CNAME file:
```bash
echo "yourdomain.com" > docs/CNAME
```

2. Configure DNS (at your registrar):
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

3. Enable HTTPS in GitHub Pages settings

## Optimization

### Performance

```bash
# Minify HTML/CSS/JS (already enabled)
# Optimize images
pip install pillow
python scripts/optimize_images.py
```

### SEO

1. Add sitemap (automatic)
2. Configure `robots.txt` (in `docs/`)
3. Add meta descriptions in front matter
4. Submit to Google Search Console

### Analytics

Add Google Analytics in `mkdocs.yml`:
```yaml
extra:
  analytics:
    provider: google
    property: G-XXXXXXXXXX
```

## Troubleshooting

### Common Issues

**Issue**: `ModuleNotFoundError: No module named 'mkdocs'`
```bash
# Solution: Activate virtual environment
source venv/bin/activate
pip install -r requirements.txt
```

**Issue**: Port 8000 already in use
```bash
# Solution: Use different port
mkdocs serve -a localhost:8001
```

**Issue**: Build fails with syntax error
```bash
# Solution: Check YAML syntax
python -c "import yaml; yaml.safe_load(open('mkdocs.yml'))"
```

**Issue**: Notebooks not rendering
```bash
# Solution: Check plugin installation
pip install mkdocs-jupyter --upgrade
```

### Get Help

- **Documentation**: [MkDocs Material Docs](https://squidfunk.github.io/mkdocs-material/)
- **Issues**: [GitHub Issues](https://github.com/madeforai/madeforai/issues)
- **Discord**: [Community Help](https://discord.gg/madeforai)
- **Email**: 2796gaurav@gmail.com

## Next Steps

1. ✅ Setup complete
2. ✅ Site running locally
3. ✅ Customized branding
4. 📝 Start adding content
5. 🚀 Deploy to production
6. 📢 Share with community!

## Resources

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Python Markdown](https://python-markdown.github.io/)
- [Jupyter Documentation](https://jupyter.org/documentation)

## Update the Site

```bash
# Pull latest changes
git pull origin main

# Install any new dependencies
pip install -r requirements.txt --upgrade

# Test locally
mkdocs serve
```

That's it! You're all set up. Happy building! 🎉