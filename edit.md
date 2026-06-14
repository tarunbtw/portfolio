# 🛠️ Portfolio Customization & Editing Guide

Welcome to the editing guide for your portfolio website. This project includes both **interactive click-to-open links** and an **automated configuration wizard script** to make edits effortless.

---

## ⚡ Option A: Interactive Terminal Configurator (Recommended)

Instead of manually browsing code files, you can use the interactive CLI wizard. It prompts you for details (like your name, subtitle, social links, and theme color) and updates the code automatically.

To run it, open your terminal in the root of the project and execute:

```bash
node edit.js
```

---

## 🗺️ Option B: Click-to-Open Guide (VS Code Integration)

If you prefer to edit files manually, use the table below. The file paths are configured as VS Code deep-links. Clicking them will open the files directly in your VS Code workspace:

| Category | Description | Primary File Link |
| :--- | :--- | :--- |
| **📦 Project Info** | App name, description, author configurations | [package.json](vscode://file/home/tarunbtw/projects/portfolio/package.json) |
| **🌐 Search & Metadata** | Browser titles, SEO description, Twitter tags | [components/layouts/main.js](vscode://file/home/tarunbtw/projects/portfolio/components/layouts/main.js) |
| **🎨 Branding** | Site logo text, Footprint icon | [components/logo.js](vscode://file/home/tarunbtw/projects/portfolio/components/logo.js) |
| **🧭 Navigation** | Top bar links, mobile dropdown menus | [components/navbar.js](vscode://file/home/tarunbtw/projects/portfolio/components/navbar.js) |
| **🏠 Homepage** | Welcome bio, timeline history, social links, newsletter | [pages/index.js](vscode://file/home/tarunbtw/projects/portfolio/pages/index.js) |
| **💼 Projects (Works)** | Main portfolio list and individual project pages | [pages/works.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works.js) |
| **📝 Blog Posts** | Article details, thumbnails, and links | [pages/posts.js](vscode://file/home/tarunbtw/projects/portfolio/pages/posts.js) |
| **🖼️ Wallpapers** | Sell-sheets, Payhip buttons, preview videos | [pages/wallpapers/index.js](vscode://file/home/tarunbtw/projects/portfolio/pages/wallpapers/index.js) |
| **🐶 3D voxel dog** | Customizing the rotating 3D GLB model | [components/voxel-dog.js](vscode://file/home/tarunbtw/projects/portfolio/components/voxel-dog.js) |
| **🌈 Theme & Fonts** | Modifying accent colors, background colors, custom fonts | [lib/theme.js](vscode://file/home/tarunbtw/projects/portfolio/lib/theme.js) |
| **🔗 Redirects** | Store routing configurations | [vercel.json](vscode://file/home/tarunbtw/projects/portfolio/vercel.json) |

---

## Detailed Editing Steps

### 1. 📦 Global Site Configurations
* **Project Info:** [package.json](vscode://file/home/tarunbtw/projects/portfolio/package.json)
  * Update name, description, and author credentials.
* **Site Metadata (HTML Head):** [components/layouts/main.js](vscode://file/home/tarunbtw/projects/portfolio/components/layouts/main.js)
  * Update `<meta name="description" ...>` and `<meta name="author" ...>` tags.
  * Update OpenGraph and Twitter site properties (`@craftzdog`, etc.).
  * Update the browser title tag `<title>Tarun - Homepage</title>`.
* **Title Suffix:** [components/layouts/article.js](vscode://file/home/tarunbtw/projects/portfolio/components/layouts/article.js)
  * Update the site title suffix `Takuya Matsuyama` appended on subpages.

### 2. 🧭 Navigation & Branding
* **Branding Logo:** [components/logo.js](vscode://file/home/tarunbtw/projects/portfolio/components/logo.js)
  * Change text name on line 36.
  * Swap icon `<FootprintIcon />` with other SVGs in [components/icons/](vscode://file/home/tarunbtw/projects/portfolio/components/icons/).
* **Nav Links:** [components/navbar.js](vscode://file/home/tarunbtw/projects/portfolio/components/navbar.js)
  * Update navigation urls (e.g. Wallpapers, Setup, Github Source) in desktop and mobile code.

### 3. 📄 Footer
* **Copyright Notice:** [components/footer.js](vscode://file/home/tarunbtw/projects/portfolio/components/footer.js)
  * Update copyright name next to `{new Date().getFullYear()}` on line 6.

### 4. 🏠 Homepage Content
* **Homepage:** [pages/index.js](vscode://file/home/tarunbtw/projects/portfolio/pages/index.js)
  * Edit "Hello toast banner", name/subtitle descriptions.
  * Update avatar photo `/images/tarun.jpg` (stored in public directory).
  * Update Bio milestones, timeline text, hobbies, and social URLs.
  * Update empty newsletter link `href=" "`.

### 5. 💼 Works / Projects
* **Grid Overview:** [pages/works.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works.js)
  * Update project grid cards, subtitles, and thumbnails.
* **Detail Pages:** (Click to open each project layout)
  * [amembo.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/amembo.js)
  * [fourpainters.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/fourpainters.js)
  * [freedbtagger.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/freedbtagger.js)
  * [inkdrop.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/inkdrop.js)
  * [margelo.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/margelo.js)
  * [menkiki.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/menkiki.js)
  * [modetokyo.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/modetokyo.js)
  * [pichu2.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/pichu2.js)
  * [styly.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/styly.js)
  * [walknote.js](vscode://file/home/tarunbtw/projects/portfolio/pages/works/walknote.js)

### 6. 🖼️ Wallpapers Store Section
* **Wallpapers Main Page:** [pages/wallpapers/index.js](vscode://file/home/tarunbtw/projects/portfolio/pages/wallpapers/index.js)
  * Update wallpapers shop listings and descriptions.
* **Pack Details Pages:**
  * [cherry-blossoms.js](vscode://file/home/tarunbtw/projects/portfolio/pages/wallpapers/cherry-blossoms.js)
  * [machiya.js](vscode://file/home/tarunbtw/projects/portfolio/pages/wallpapers/machiya.js)
* **Wallpaper Shop Legal Links:** [components/wallpaper.js](vscode://file/home/tarunbtw/projects/portfolio/components/wallpaper.js)
  * Update shop policy terms (Terms of Use, Privacy) linked to store URL.

### 7. 🎨 Colors & Theme Configuration
* **Theme Styling:** [lib/theme.js](vscode://file/home/tarunbtw/projects/portfolio/lib/theme.js)
  * Modify brand accent colors, background color mode styling.
* **Global Typography:** [components/fonts.js](vscode://file/home/tarunbtw/projects/portfolio/components/fonts.js)
  * Swap google webfonts imports.

### 8. 🐶 3D voxel dog
* **3D Dog:** [components/voxel-dog.js](vscode://file/home/tarunbtw/projects/portfolio/components/voxel-dog.js)
  * Swap production Fastly CDN target URL with your own storage link.
  * Custom Asset: Replace [public/dog.glb](vscode://file/home/tarunbtw/projects/portfolio/public/dog.glb) with your custom 3D model asset.

---

## 📁 Static Assets Directory Map

Put your new pictures, models, and assets in the corresponding subfolders inside the root folder:

```text
public/
├── dog.glb              # The rotating 3D model
└── images/
    ├── tarun.jpg        # Your avatar photo
    ├── works/           # Screenshots of projects
    ├── contents/        # Thumbnails for blog posts
    └── wallpapers/      # Wallpaper preview assets
```
