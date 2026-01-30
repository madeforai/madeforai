# MadeForAI Build Hooks

This directory contains MkDocs hooks that enhance the documentation build process.

## Available Hooks

### 1. `notebook_enhancer.py`
Enhances Jupyter notebook rendering with interactive features like copy buttons and improved styling.

### 2. `path_generator.py` ⭐ NEW
**Dynamically generates beautiful learning path overview pages** based on the navigation structure in `mkdocs.yml`.

#### How It Works

The path generator automatically creates/updates the `index.md` file for each learning path during the build process. It:

1. **Reads the navigation structure** from `mkdocs.yml`
2. **Extracts modules and chapters** for each learning path
3. **Generates beautiful HTML/Markdown** with:
   - Hero section with path icon and description
   - Prerequisites and learning outcomes in styled cards
   - Module cards with chapter links
   - "Coming Soon" placeholders for future modules
   - Responsive design with animations
   - Call-to-action button to start learning

#### Configuration

Each learning path is configured in `path_generator.py` with:

```python
path_configs = {
    'understanding-ai': {
        'title': 'Understanding AI',
        'subtitle': 'From Absolute Beginner to AI Enthusiast',
        'description': '...',
        'icon': '🎓',
        'color': '#3b82f6',
        'prerequisites': [...],
        'outcomes': [...]
    },
    # ... more paths
}
```

#### Adding a New Learning Path

1. **Add the path to `mkdocs.yml` navigation:**
   ```yaml
   nav:
     - New Path:
         - New Path: paths/new-path/index.md
         - Module 1:
             - Chapter 1: paths/new-path/module-1/chapter-1.ipynb
   ```

2. **Add configuration in `path_generator.py`:**
   ```python
   'new-path': {
       'title': 'New Path',
       'subtitle': 'Your subtitle',
       'description': 'Path description',
       'icon': '🚀',
       'color': '#10b981',
       'prerequisites': ['Prerequisite 1', 'Prerequisite 2'],
       'outcomes': ['Outcome 1', 'Outcome 2']
   }
   ```

3. **Build the site:**
   ```bash
   mkdocs build
   # or
   mkdocs serve
   ```

The `index.md` file will be automatically generated/updated!

#### Benefits

✅ **No manual updates needed** - Pages update automatically when you add/remove chapters  
✅ **Consistent design** - All learning paths have the same beautiful layout  
✅ **Dynamic content** - Reflects the actual navigation structure  
✅ **Easy maintenance** - Update once in mkdocs.yml, reflects everywhere  
✅ **Beautiful UI** - Modern cards, animations, and responsive design  

#### Customization

To customize the generated pages:

1. **Styling**: Edit the inline styles in `generate_markdown()` function
2. **Layout**: Modify the HTML structure in `generate_markdown()`
3. **Colors**: Update the `color` field in path configs
4. **Icons**: Change the `icon` field (supports emoji)

## Usage

These hooks are automatically executed during the MkDocs build process. No manual intervention required!

```bash
# Development server (hooks run on file changes)
mkdocs serve

# Production build (hooks run once)
mkdocs build
```

## Development

To test the path generator independently:

```python
import sys
sys.path.insert(0, 'docs/hooks')
from path_generator import on_pre_build

class MockConfig(dict):
    def __init__(self):
        super().__init__()
        self['docs_dir'] = 'docs'
        self['config_file_path'] = 'mkdocs.yml'

on_pre_build(MockConfig())
```
