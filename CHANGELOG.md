# Changelog

All notable changes to **Eclipse Wave** will be documented in this file.  
This project follows [Semantic Versioning](https://semver.org).

---

## [1.2.0] – 2026-01-05

### 🚀 Industry-Standard Theme Upgrade

This release brings Eclipse Wave up to industry-standard with modern VS Code theme features.

#### ✨ New Features

- **Semantic Highlighting Support** – Added `semanticHighlighting` and `semanticTokenColors` for enhanced TypeScript, Rust, and modern IDE intelligence
- **Inlay Hints Styling** – Colors for TypeScript type hints and parameter hints
- **Ghost Text Support** – Styling for AI code suggestions (Copilot, etc.)
- **Sticky Scroll Colors** – Background colors for the new VS Code sticky scroll feature
- **Git File Decorations** – Complete set of colors for file explorer git status (added, modified, deleted, renamed, untracked, ignored, conflicting, submodule)
- **Settings UI Colors** – Styled dropdowns, checkboxes, and inputs in VS Code settings

#### 🎨 Additional Token Colors

- Regular Expressions and escape characters
- TypeScript type annotations
- JSON/YAML keys
- Template string interpolation
- Rust/C++ macros and attributes

#### 🔧 UI Enhancements

- Editor widgets and hover popups
- Word highlight backgrounds
- Gutter controls (folding, comments)
- Focus borders
- Welcome page backgrounds
- Keybinding label styling

#### 👁️ Eye Comfort Improvements

Balanced color optimization for long coding sessions while preserving the Eclipse Wave aesthetic:

**Syntax Colors (Softened):**
- Numbers/Booleans: `#FFAC40` → `#E5A574` (Warm Amber)
- Classes/Types: `#FFD166` → `#D7BA7D` (Cosmic Gold)
- CSS Selectors: `#FFD166` → `#D7BA7D` (Cosmic Gold)

**Bracket Colors (Softened):**
- Bracket yellow: `#F1FA8C` → `#E5C07B` (Soft Cosmic Gold)
- Bracket green: `#50FA7B` → `#7EC699` (Muted Aurora Green)

**Terminal Colors (Softened):**
- Green: `#70E570` → `#7EC699` (Muted Aurora)
- Yellow: `#FFD166` → `#E5C07B` (Soft Cosmic Gold)
- Magenta: `#FF4DFF` → `#C792EA` (Calming Lavender)
- Cyan: `#00E5FF` → `#7CC8DE` (Soft Nebula Cyan)

**UI Colors (Softened):**
- Git Added: `#50FA7B` → `#7EC699` (Muted Aurora)
- Warning Icons: `#FFCB6B` → `#D7BA7D` (Cosmic Gold)

These changes reduce eye strain for 4-8+ hour sessions while maintaining the Eclipse Wave cosmic aesthetic.

---

## [1.1.1] – 2025-09-25

### ✨ New Features & Enhancements

- Improved Readability and Eye Comfort: Tweaked editor foreground from #D6E5F5 to #C0CBE3 and editor cursor from #FF4DFF to #BD93F9.
- Enhanced Syntax Clarity: Punctuation now has its own distinct color (#A1ADC8), separating it from comments. Variables were changed to a more visible #E5A574.

- Refined Color Palette: Made subtle changes to strings, HTML tags, and terminal colors for a more harmonious visual experience.
- Updated README with new banner image.

## [1.1.0] – 2025-09-19

### ✨ Added / Updated UI Elements

- Added menubar styling: background, foreground, hover/selection states
- Added missing UI tokens for quick input / command palette
- Added progress bar color
- Styled find widget / search highlights: find match, range highlights
- Added merge conflict highlight backgrounds (current vs incoming)
- Added sticky scroll backgrounds
- Styled status bar prominent items
- Added peek view titles (label & description) colors

### 🔧 Refinements

- Ensured consistency across lists, trees, breadcrumbs, buttons, dropdowns
- Improved contrast in editor widgets and dialogs
- Unified UI styling throughout theme; no existing colors changed

---

## [1.0.7] – 2025-09-05

### 🧩 New Feature

- Added bracket pair colorization for better visibility
- Configured distinct colors for each bracket level

---

## [1.0.6] – 2025-08-30

### 🐛 Bug Fixes / Corrections

- Fixed missing semicolon in JSON causing theme load issues
- Updated README with MIT license badge
- Added LICENSE file with MIT license text
- Removed unnecessary devDependency from package.json

---

## [1.0.5] – 2025-08-28

### 🖼 Logo Update

- Updated theme logo to new design.

---

## [1.0.3] – 2025-08-20

### 📝 Documentation Update

- Update README with new language syntax screenshots
- Replace dark mode preview image
- Bump version to 1.0.3

---

## [1.0.2] – 2025-08-19

### 🌐 Marketplace publish

- Published Eclipse Wave to Visual Studio Code Marketplace

---

## [1.0.1] – 2025-08-19

### 🔍 Small Corrections

- Update logo
- Fixed theme path
- Update VS Code engine version

---

## [1.0.0] – 2025-08-19

### 🎉 Initial Release

- A minimal, modern VS Code theme for clean and focused coding.
