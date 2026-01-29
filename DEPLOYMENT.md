# 🚀 MadeForAI Deployment Guide

This guide will help you deploy MadeForAI to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Python 3.8+ installed

## Step 1: Fork or Clone the Repository

```bash
git clone https://github.com/madeforai/madeforai.git
cd madeforai
```

## Step 2: Configure Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

## Step 3: Update Configuration

Edit `mkdocs.yml`:

```yaml
site_url: https://YOUR_USERNAME.github.io/madeforai/
repo_url: https://github.com/YOUR_USERNAME/madeforai
```

Update the newsletter form action in `docs/index.md` with your Mailchimp details.

Update Discord invite links throughout the site.

Update Google Analytics ID in `mkdocs.yml` (optional).

## Step 4: Test Locally

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Serve locally
mkdocs serve

# Open http://127.0.0.1:8000 in your browser
```

## Step 5: Deploy

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial deployment"

# Push to GitHub
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build the site
2. Deploy to GitHub Pages
3. Make it available at your site URL

## Step 6: Verify Deployment

1. Go to **Actions** tab in your GitHub repository
2. Watch the deployment workflow run
3. Once complete (green checkmark), visit your site URL
4. Your site should be live!

## Customization

### Update Branding

Replace these files:
- `docs/assets/images/logo.svg` - Your logo
- `docs/assets/images/favicon.png` - Your favicon

### Update Colors

Edit `docs/stylesheets/extra.css`:

```css
:root {
  --md-primary-fg-color: #YOUR_COLOR;
  --md-accent-fg-color: #YOUR_ACCENT;
}
```

### Add Your Content

1. Create `.ipynb` files in appropriate directories
2. Update navigation in `mkdocs.yml`
3. Commit and push - auto-deploys!

## Troubleshooting

### Build Fails

Check the **Actions** tab for error logs:
```bash
# Common issues:
# 1. Missing dependencies - check requirements.txt
# 2. Syntax errors in mkdocs.yml
# 3. Broken links - run `mkdocs build --strict` locally
```

### Site Not Updating

```bash
# Force rebuild
git commit --allow-empty -m "Force rebuild"
git push origin main
```

### Local Build vs Production

```bash
# Build for production locally
mkdocs build

# Check the site/ directory
cd site && python -m http.server 8000
```

## Performance Optimization

### Enable Caching

Already configured in `mkdocs.yml`:
- Git revision dates cached
- Search index cached
- Social cards cached

### Optimize Images

```bash
# Install optimization tools
pip install pillow

# Optimize images
python -c "from PIL import Image; Image.open('image.png').save('image.png', optimize=True, quality=85)"
```

### Monitor Performance

Use these tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## Custom Domain (Optional)

1. **Buy a domain** (e.g., from Namecheap, Google Domains)

2. **Add CNAME file**:
```bash
echo "madeforai.com" > docs/CNAME
git add docs/CNAME
git commit -m "Add custom domain"
git push
```

3. **Configure DNS** (at your domain registrar):
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io

Type: A (for apex domain)
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

4. **Enable HTTPS** in GitHub Pages settings (automatic)

## Continuous Deployment

Every push to `main` branch automatically triggers deployment:

```bash
# Make changes
vim docs/index.md

# Commit and push
git add docs/index.md
git commit -m "Update homepage"
git push

# Site updates in ~2-3 minutes
```

## Monitoring

### GitHub Actions

- View all deployments: **Actions** tab
- Check deploy status: Look for green checkmarks
- Debug failed builds: Click on failed workflow

### Analytics

Configure Google Analytics in `mkdocs.yml`:
```yaml
extra:
  analytics:
    provider: google
    property: G-XXXXXXXXXX
```

## Backup

```bash
# Backup entire site
git clone https://github.com/YOUR_USERNAME/madeforai.git backup

# Or use GitHub's export feature
# Settings > Options > Export repository
```

## Support

- **Issues**: [GitHub Issues](https://github.com/madeforai/madeforai/issues)
- **Discord**: [Join our community](https://discord.gg/madeforai)
- **Email**: 2796gaurav@gmail.com

## Next Steps

1. ✅ Site deployed
2. ✅ Custom domain configured (optional)
3. ✅ Analytics setup (optional)
4. 📝 Start adding content
5. 📢 Share with the community!

Happy teaching! 🎓