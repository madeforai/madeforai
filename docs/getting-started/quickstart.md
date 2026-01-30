---
title: Quick Start
description: Run your first LLM in 5 minutes
---

# Quick Start Guide

Get up and running with your first LLM in just 5 minutes!

## 🚀 Run Your First LLM

### Step 1: Open in Colab

Click this badge to open a ready-to-run notebook:

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/madeforai/madeforai/blob/main/docs/paths/understanding-ai/01-ai-ml-dl-intro.ipynb)

### Step 2: Run This Code

```python
# Install transformers (already installed in Colab)
# !pip install transformers torch

from transformers import pipeline

# Load a small language model
generator = pipeline("text-generation", model="gpt2")

# Generate text
prompt = "The future of AI is"
result = generator(prompt, max_length=50, num_return_sequences=1)

print(result[0]['generated_text'])
```

**Expected Output:**
```
The future of AI is looking bright as we see more and more 
advances in machine learning and deep learning techniques...
```

!!! success "Congratulations!"
    You just ran your first LLM inference! 🎉

---

## 🧠 Try a Larger Model

For more impressive results, try a larger model:

```python
from transformers import pipeline

# Use a more capable model
chat = pipeline("text-generation", model="microsoft/phi-2")

prompt = "Explain machine learning in simple terms:"
result = chat(prompt, max_length=150)

print(result[0]['generated_text'])
```

---

## 🛤️ What's Next?

Now that you've run your first LLM, choose a learning path:

<div class="grid cards" markdown>

-   :fontawesome-solid-graduation-cap: **[Understanding AI](../paths/understanding-ai/index.md)**
    
    Start from the fundamentals
    
    ---
    
    Perfect for beginners

-   :fontawesome-solid-code: **[Engineering AI](../paths/engineering-ai/index.md)**
    
    Build production applications
    
    ---
    
    For developers with ML basics

</div>
