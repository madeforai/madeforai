# MadeForAI

> The Applied Generative AI Engineering Handbook

**Open-source, interactive learning platform for mastering Generative AI engineering** — from tensor basics to production-grade RAG systems.

🌐 **Live Site:** [madeforai.github.io/madeforai](https://madeforai.github.io/madeforai)

---

## 🎯 What is MadeForAI?

A code-first, hands-on curriculum designed to take you from AI fundamentals to deploying production-ready LLM applications. Built with interactive Jupyter notebooks, real-world projects, and a vibrant community.

### Key Features

- **5 Learning Paths** — Understanding AI, Engineering AI, Researching AI, Architecting AI, Business AI
- **50+ Interactive Lessons** — Jupyter notebooks with live code execution
- **200+ Hands-on Exercises** — Learn by building, not just reading
- **Production-Ready Projects** — RAG systems, model deployment, API development
- **Modern AI Stack** — PyTorch, Hugging Face, vLLM, FastAPI, Weights & Biases
- **2026 SEO Optimized** — Full Open Graph, Twitter Cards, and structured data
- **Social Media Ready** — Optimized previews for all platforms

---

## � Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/madeforai/madeforai.git
cd madeforai

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Serve locally
mkdocs serve
```

Visit `http://127.0.0.1:8000` to view the site locally.

### Build for Production

```bash
mkdocs build
```

The static site will be generated in the `site/` directory.

---

## 📚 Learning Paths

### 🎓 Understanding AI
**For:** Absolute beginners to AI enthusiasts  
**Prerequisites:** Basic Python, High school mathematics  
**Learn:** AI fundamentals, neural networks, LLMs, prompt engineering

### 💻 Engineering AI
**For:** Developers building LLM applications  
**Prerequisites:** Python experience, Basic ML concepts  
**Learn:** Transformer architecture, fine-tuning (LoRA/QLoRA), RAG systems, deployment

### 🔬 Researching AI
**For:** Researchers pushing AI boundaries  
**Prerequisites:** Strong math background, Deep learning fundamentals  
**Learn:** Paper implementation, novel architectures, rigorous experimentation

### 🏗️ Architecting AI
**For:** System designers and architects  
**Prerequisites:** System design experience, Cloud infrastructure knowledge  
**Learn:** Scalable architectures, infrastructure choices, monitoring, cost optimization

### 💼 Business AI
**For:** Business leaders and strategists  
**Prerequisites:** No technical background required  
**Learn:** AI strategy, use case identification, build vs. buy decisions, team building

---

## 🛠️ Tech Stack

- **[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)** — Documentation framework
- **[Jupyter Notebooks](https://jupyter.org/)** — Interactive learning content
- **Python** — Build automation and hooks
- **GitHub Pages** — Free hosting and deployment
- **GitHub Actions** — Automated CI/CD pipeline
- **Custom Logo** — Dynamic SVG with animated pulse wave
- **SEO & Social** — Open Graph, Twitter Cards, JSON-LD structured data

---

## 📁 Project Structure

```
madeforai/
├── docs/                       # Documentation source
│   ├── index.md               # Homepage
│   ├── assets/                # Logo, favicons, social previews
│   ├── paths/                 # Learning paths
│   │   ├── understanding-ai/
│   │   ├── engineering-ai/
│   │   ├── researching-ai/
│   │   ├── architecting-ai/
│   │   └── business-ai/
│   ├── javascripts/           # Custom JS (optimized)
│   ├── stylesheets/           # Custom CSS
│   ├── hooks/                 # MkDocs build hooks
│   │   ├── notebook_enhancer.py
│   │   └── path_generator.py
│   ├── community/
│   ├── contributing/
│   ├── robots.txt             # SEO directives
│   └── site.webmanifest       # PWA manifest
├── overrides/                 # Theme customizations
│   ├── main.html              # Main template
│   └── partials/
│       ├── meta.html          # SEO meta tags
│       └── footer.html        # Custom footer
├── .github/workflows/         # CI/CD automation
├── mkdocs.yml                 # MkDocs configuration
├── requirements.txt           # Python dependencies
├── generate_favicons.py       # Favicon generator
├── setup_social_seo.sh        # Automated setup script
├── SOCIAL_MEDIA_SEO_GUIDE.md  # Complete SEO documentation
├── QUICK_REFERENCE_SOCIAL_SEO.md  # Quick reference
└── README.md                  # This file
```

---

## 🤝 Contributing

We welcome contributions! Whether you're fixing typos, adding content, or building new features — all help is appreciated.

### Ways to Contribute

- 🐛 Report bugs via [GitHub Issues](https://github.com/madeforai/madeforai/issues)
- ✨ Suggest features or improvements
- 📝 Fix typos and improve documentation
- 📚 Create new tutorials and lessons
- 🌍 Translate content to other languages
- 🎨 Improve design and UX

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test locally with `mkdocs serve`
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

See [CONTRIBUTING.md](https://madeforai.github.io/madeforai/contributing/) for detailed guidelines.

---

## 🌐 Community & Support

Join our growing community of AI engineers and enthusiasts:

- **Discord:** [discord.gg/UycUrRfm](https://discord.gg/UycUrRfm) — Real-time help, study groups, weekly events
- **GitHub:** [github.com/madeforai/madeforai](https://github.com/madeforai/madeforai) — Source code, issues, discussions
- **X (Twitter):** [@MadeForAI_](https://x.com/MadeForAI_) — Latest AI trends and updates
- **LinkedIn:** [linkedin.com/company/madeforai](https://www.linkedin.com/company/madeforai/about/) — Professional network and company updates
- **Email:** [lmfastai@gmail.com](mailto:lmfastai@gmail.com) — Direct contact

---

## � Deployment

### Automated Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

**Workflow:** `.github/workflows/deploy.yml`

### Manual Deployment

```bash
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch.

---

## 📝 License

Copyright © 2026 MadeForAI Inc. All rights reserved.

---

## 🙏 Acknowledgments

Built with ❤️ by the MadeForAI team and our amazing community of contributors.

Special thanks to:
- The MkDocs Material team for the excellent documentation framework
- The Jupyter team for interactive notebook support
- Our community members for feedback and contributions

---

**Ready to master GenAI?** [Start Learning →](https://madeforai.github.io/madeforai)
