# Changelog

All notable changes to **Eclipse Wave** will be documented in this file.
This project follows [Semantic Versioning](https://semver.org).

---

## [2.1.0] – 2026-07-29

### 🎨 Color Palette Upgrade

Full palette refresh across all 4 variants — every color benchmarked for readability, contrast, and long-session eye comfort. The goal: make each variant feel more intentional and distinctive while staying true to the Eclipse Wave aesthetic.

---

#### 🌑 Eclipse Wave Dark

- **Background** `#0B0F1A` → `#1E2030` — shifted to a blue-tinted dark. Gives the theme a stronger identity and makes syntax colors pop more naturally against it
- **Foreground** `#C0CBE3` → `#C0CAF5` — blue-white tone, easier on the eyes than neutral white after long sessions
- **keyword** `#9D7CFF` → `#B8A0FF` — softer violet, less visual weight
- **func** `#82AAFF` → `#7FC3FF` — cleaner sky blue, more distinct from keyword
- **variable** `#E5A574` → `#FFAD70` — warmer amber, better separation from type
- **type** `#D7BA7D` → `#E8C97A` — golden wheat, more distinct from variable
- **interface** `#7CC8DE` → `#89DCEB` — brighter sapphire teal, cleaner
- **attribute / tag** `#FF79C6` / `#E17888` → `#F28FAD` — unified muted rose, less aggressive than hot pink
- **operator** `#C792EA` → `#CBA6F7` — lavender, softer and more readable
- **module** `#FFD166` → `#FAB387` — warm peach, more distinctive than yellow
- **comment** `#6878A0` → `#6C7A9C` — blue-gray, passes WCAG AA on new background
- **punctuation / fgMuted** → `#8B92B8` — nudged up to pass WCAG AA on new background

#### ☀️ Eclipse Wave Light

- **Background** `#F5F4F9` → `#F6F8FA` — cooler off-white. Removes glare without losing the light mode feel
- **Foreground** `#2B2D42` → `#1F2328` — deeper near-black, higher contrast
- **func** `#2E5FA8` → `#1C5FAA` — richer navy blue
- **string** `#3A7A50` → `#287A46` — deeper forest green, more contrast on light bg
- **operator** `#6A50B8` → `#8250DF` — more saturated purple, clearly distinct from keyword
- **tag** `#A83050` → `#CF222E` — cleaner red, universally readable for HTML tags
- **comment** `#7878A8` → `#57606A` — neutral gray, unobtrusive without disappearing

#### 🌚 Eclipse Wave Midnight

- **Background** `#07090F` → `#000000` — true black for OLED/AMOLED displays. Battery saving and visually striking
- **keyword** `#8B6EF0` → `#A78BFA` — more vivid violet, needed on true black or it fades
- **func** `#7BA8F5` → `#60A5FA` — brighter blue, high readability on black
- **string** `#8DC76E` → `#34D399` — emerald green, vivid without being neon
- **variable** `#D4906A` → `#FB923C` — warm orange, strong contrast on black
- **type** `#C4A268` → `#F9E2AF` — warm yellow, readable and warm
- **interface** `#68B8CC` → `#94E2D5` — brighter teal, more distinctive
- **attribute** `#D860A8` → `#F472B6` — vivid pink, stands out clearly on black
- **module** `#E8C060` → `#FBBF24` — bold amber, strong on pure black
- **tag** `#D07080` → `#F38BA8` — vivid rose-red, readable on black

#### ⛈️ Eclipse Wave Storm

- **Background** `#0A1020` → `#0D1117` — deeper blue-black, stronger cool identity
- **Foreground** `#B4C4DC` → `#E6EDF3` — brighter and cleaner, better readability
- **keyword** `#7485E8` → `#FF7B72` — warm red-orange, creates clear separation from func
- **func** `#68A8E0` → `#D2A8FF` — soft purple, distinct from keyword
- **string** `#6DB585` → `#A5D6FF` — light blue, airy and readable on deep bg
- **variable** `#D08858` → `#FFA657` — warmer orange, high contrast
- **type** `#B89A60` → `#7EE787` — fresh green, distinct from all other tokens
- **interface** `#5AAAC0` → `#79C0FF` — clear blue, differentiated from string
- **tag** `#C07080` → `#7EE787` — unified with type (green family)
- **comment** `#5A6A88` → `#8B949E` — neutral blue-gray, clean and unobtrusive

#### 🔧 Contrast

All tokens across all 4 variants verified against WCAG AA (4.5:1) by the automated contrast audit in `npm run build`.

---

## [2.0.0] – 2026-07-28

### 🏗️ Build Pipeline (Breaking Change)

Themes are now **generated from TypeScript source** instead of hand-edited JSON.
Edit `src/palette.ts` → run `npm run build` → all 4 variant JSONs regenerate automatically.

#### What changed

- Added `src/palette.ts` — single source of truth for all colors across all variants
- Added `src/build-theme.ts` — converts a palette into a full VS Code theme object (305+ UI keys)
- Added `src/build.ts` — generates all 4 JSONs + runs WCAG AA contrast audit on every build
- Added `tsconfig.json` for TypeScript compilation
- All 4 theme JSONs are now **build artifacts** (do not edit them directly)

#### Contrast fixes (auto-detected by new audit)

- Dark: `comment` and `fgMuted` were below 4.5:1 — lightened to pass WCAG AA
- Light: `keyword`, `variable`, `operator`, `comment`, `fgMuted` — all adjusted
- Midnight: `comment`, `punctuation`, `fgMuted` — lightened
- Storm: `comment`, `punctuation`, `fgMuted` — lightened

#### New files

- `.github/workflows/release.yml` — CI builds + contrast-checks on every PR; auto-publishes to Marketplace on `v*` tag push
- `extras/windows-terminal.json` — Windows Terminal color schemes (Dark, Midnight, Storm)
- `extras/Eclipse Wave.itermcolors` — iTerm2 color scheme (Dark variant)
- `CUSTOMIZATION.md` — copy-paste snippets for disabling italics, JSDoc highlights, etc.
- `.vscodeignore` — excludes `src/`, `node_modules/`, CI config from the published `.vsix`

---

## [1.5.0] – 2026-04-22

### 🌌 Two New Variants — Eclipse Wave Expands

This is the biggest update Eclipse Wave has ever had. Every corner of the theme got attention — from the status bar to semantic tokens to terminal colors. Two new variants join the family, and the existing Dark and Light themes are now more complete than they've ever been.

#### 🆕 Eclipse Wave Midnight

Built specifically for late-night sessions and OLED displays. The background goes near-void black (`#07090F`) and every syntax color is dialed back slightly — warmer, softer, less harsh. Keywords are **Twilight Violet** (`#8B6EF0`), strings shift to a gentler **Nebula Leaf** (`#8DC76E`). The whole palette breathes easier at 2am.

#### 🆕 Eclipse Wave Storm

A dark blue-gray variant that sits between the original dark theme and Midnight. Think coding during a thunderstorm — cool, desaturated, slightly moody. **Lightning Blue** (`#7485E8`) takes over as the accent, functions go **Rain Blue** (`#68A8E0`), strings become a muted **Seafoam** (`#6DB585`).

#### 🔧 What Got Fixed in Dark & Light

- **Full 16-color terminal** — 6 missing bright ANSI variants added
- **Symbol icons** — all 35 `symbolIcon.*` keys added
- **`type` field** — both themes now declare `"type": "dark"` / `"type": "light"`
- **Command Center** — VS Code search bar fully styled
- **Unsaved tab indicators** — `tab.activeModifiedBorder` and `tab.inactiveModifiedBorder` added
- **Status bar error/warning states** — `statusBarItem.errorBackground` and `warningBackground` added
- **Notebook / Jupyter** — cell borders, focus states, status icons covered
- **Diff editor** — `insertedLineBackground` and `removedLineBackground` added

#### 🎨 Syntax Improvements

- Template literals fixed, SCSS support, GraphQL, operator types split, object literal keys, JSX improvements

#### 🧠 Semantic Token Additions

- `property`, `property.declaration`, `*.mutable`, `*.async`, `*.deprecated`, `*.static`, `*.unsafe`, `selfParameter`, `magicFunction`

#### 🔍 Contrast Fixes

- Line numbers: `#6C7086` → `#7C809A`
- Comments: `#7A7F95` → `#8B8FA8`
- Inactive tab text: `#7A8490` → `#8A929E`

---

## [1.4.0] – 2026-04-20

### 🌤️ Eclipse Wave Light — New Theme Variant

#### ✨ New Theme: Eclipse Wave Light

- **Warm lavender-white base** (`#F5F4F9`) — easy on the eyes under bright ambient light
- **Cosmic color palette adapted for light backgrounds** — every accent color deepened and desaturated for high contrast readability
- **Full parity with the dark theme** — all 14 syntax token sections, semantic token colors, every UI region covered
- **`uiTheme: vs`** — correctly registered as a light theme

| Role | Dark | Light |
|---|---|---|
| Background | `#0B0F1A` Deep Cosmic Black | `#F5F4F9` Nebula White |
| Keywords | `#9D7CFF` Galactic Purple | `#7A5FD0` Cosmic Violet |
| Functions | `#82AAFF` Star Blue | `#2E5FA8` Deep Star Blue |
| Strings | `#A1C682` Aurora Green | `#3A7A50` Deep Aurora Green |
| Properties | `#7CC8DE` Nebula Cyan | `#277A82` Deep Teal |
| Attributes | `#FF79C6` Pink Starlight | `#A0336B` Nebula Pink |
| Classes | `#D7BA7D` Cosmic Gold | `#87642A` Earthy Gold |
| Variables | `#E5A574` Warm Amber | `#B05E20` Earthy Amber |

---

## [1.3.0] – 2026-02-28

### 🚀 Eclipse Wave Gets Deeper

#### 🎨 New UI Color Tokens

- Line Highlight, Bracket Match, Tab Accent, Overview Ruler, Indent Guides, Sidebar Border, CodeLens, Lightbulb, Banner, Debug Console, Charts, Suggest Widget, Extension Button, Terminal Tab

#### 🔤 New Token Color Scopes

- Import/Export Keywords, Flow Control, `new` Keyword, DOM & Console, Module Names, Markdown Extended, Diff Highlighting, HTML Tag Brackets, TypeScript, Go, Rust, Java/C#, Shell, TOML, this/self/super, SQL, Docker, Escape Characters

#### 🧠 New Semantic Token Colors

- `function.defaultLibrary`, `variable.defaultLibrary`, `method` / `method.declaration`, `struct`, `typeParameter`, `decorator`, `macro`, `event` / `regexp`, `variable.readonly.defaultLibrary`

#### 📦 Marketplace Optimization

- Added `galleryBanner`, SEO-optimized description, expanded keywords 12 → 20, added `preview: false`

---

## [1.2.0] – 2026-01-05

### 🚀 Eclipse Wave Grows Up

- Semantic Highlighting Support, Inlay Hints, Ghost Text, Sticky Scroll, Git File Decorations, Settings UI Colors
- Additional token colors: RegEx, TypeScript annotations, JSON/YAML keys, template strings, Rust/C++ macros
- UI enhancements: editor widgets, word highlights, gutter controls, focus borders, welcome page, keybinding labels
- Eye comfort improvements across syntax, bracket, terminal, and UI colors

---

## [1.1.1] – 2025-09-25

### ✨ Enhancements

- Improved readability: editor foreground `#D6E5F5` → `#C0CBE3`, cursor `#FF4DFF` → `#BD93F9`
- Enhanced syntax clarity: punctuation gets own color (`#A1ADC8`), variables → `#E5A574`
- Refined color palette: subtle changes to strings, HTML tags, terminal colors
- Updated README with new banner image

---

## [1.1.0] – 2025-09-19

### ✨ Added / Updated UI Elements

- Menubar styling, quick input / command palette tokens, progress bar, find widget, merge conflict highlights, sticky scroll, status bar prominent items, peek view titles

### 🔧 Refinements

- Consistency across lists, trees, breadcrumbs, buttons, dropdowns
- Improved contrast in editor widgets and dialogs

---

## [1.0.7] – 2025-09-05

### 🧩 New Feature

- Added bracket pair colorization with distinct colors for each bracket level

---

## [1.0.6] – 2025-08-30

### 🐛 Bug Fixes

- Fixed missing semicolon in JSON causing theme load issues
- Added LICENSE file with MIT license text
- Removed unnecessary devDependency from package.json

---

## [1.0.5] – 2025-08-28

### 🖼 Logo Update

- Updated theme logo to new design

---

## [1.0.3] – 2025-08-20

### 📝 Documentation Update

- Updated README with new language syntax screenshots
- Replaced dark mode preview image

---

## [1.0.2] – 2025-08-19

### 🌐 Initial Marketplace Publish

- Published Eclipse Wave to the Visual Studio Code Marketplace

---

## [1.0.1] – 2025-08-19

### 🔍 Small Corrections

- Updated logo, fixed theme path, updated VS Code engine version

---

## [1.0.0] – 2025-08-19

### 🎉 Initial Release

- A minimal, modern VS Code theme for clean and focused coding