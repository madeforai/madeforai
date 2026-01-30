---
title: Installation
description: Set up your development environment for MadeForAI
---

# Installation & Environment Setup

This guide will help you set up your local development environment for running the MadeForAI notebooks.

## 🎯 Option 1: Google Colab (Recommended)

The easiest way to get started is using **Google Colab**. All our notebooks include an "Open in Colab" badge that lets you run them directly in your browser with free GPU access.

!!! success "Zero Setup Required"
    Simply click the **Open in Colab** badge at the top of any notebook to start immediately. No local installation needed!

**Benefits of Colab:**

- ✅ Free GPU access (T4, L4, A100)
- ✅ Pre-installed ML libraries
- ✅ Save notebooks to Google Drive
- ✅ Collaborative editing

---

## 🖥️ Option 2: Local Setup

For those who prefer local development:

### Prerequisites

- Python 3.10 or higher
- pip or conda package manager
- Git
- 8GB+ RAM (16GB recommended for larger models)
- NVIDIA GPU with CUDA (optional, for acceleration)

### Step 1: Clone the Repository

```bash
git clone https://github.com/madeforai/madeforai.git
cd madeforai
```

### Step 2: Create Virtual Environment

=== "Using pip"
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```

=== "Using conda"
    ```bash
    conda create -n madeforai python=3.11
    conda activate madeforai
    pip install -r requirements.txt
    ```

### Step 3: Install Jupyter

```bash
pip install jupyter jupyterlab
```

### Step 4: Launch Jupyter

```bash
jupyter lab
```

Navigate to the `docs/paths/` directory to access the notebooks.

---

## 📦 Core Dependencies

Our notebooks use these key libraries:

| Library | Version | Purpose |
|---------|---------|---------|
| `torch` | 2.2+ | Deep learning framework |
| `transformers` | 4.38+ | Hugging Face models |
| `accelerate` | 0.27+ | Distributed training |
| `datasets` | 2.16+ | Dataset loading |
| `bitsandbytes` | 0.42+ | Quantization |
| `peft` | 0.8+ | Parameter-efficient fine-tuning |

---

## ✅ Verify Installation

Run this Python code to verify your setup:

```python
import torch
import transformers

print(f"PyTorch version: {torch.__version__}")
print(f"Transformers version: {transformers.__version__}")
print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"GPU: {torch.cuda.get_device_name(0)}")
```

---

## 🚀 Next Steps

- [Quick Start Guide](quickstart.md) - Run your first LLM in 5 minutes
- [Learning Paths Overview](../paths/index.md) - Choose your learning track
