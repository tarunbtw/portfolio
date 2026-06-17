# Portfolio Editing Guide

Welcome to your portfolio project! This guide outlines the key files you'll need to edit to customize the portfolio with your own data, projects, and styling. All the links below are clickable and will take you directly to the file.

## 1. Core Content & Personal Information

The primary file where you manage all your personal data, text, and social links is `content.tsx`.

[**Edit Content Data**](./src/resources/content.tsx)

**What you can change here:**
- **Person details:** Name, role, location, email, and languages.
- **Social links:** Add or remove links to GitHub, LinkedIn, Instagram, etc.
- **Home page text:** Headlines, descriptions, and featured work links.
- **About page:** Work experience, studies, and technical skills.
- **Gallery:** Update the placeholder images with your own photos.

## 2. Configuration & Styling

To change the look and feel of the site or update core configuration, head over to `once-ui.config.ts`.

[**Edit Configuration**](./src/resources/once-ui.config.ts)

**What you can change here:**
- **Base URL:** Update `baseURL` with your own domain for SEO.
- **Styling (`style` object):** Change themes (dark/light), brand colors, accent colors, and border styles.
- **Fonts:** Adjust typography if needed.
- **SEO & Schema:** Update logo, site name, and description.

If you need to add any custom CSS overrides, use:
[**Edit Custom CSS**](./src/resources/custom.css)

## 3. Managing Projects (Work)

Your portfolio projects are managed as individual Markdown (MDX) files.

**Directory:** [`src/app/work/projects/`](./src/app/work/projects)

**How to edit or add projects:**
- Edit the existing files (e.g., [building-once-ui-a-customizable-design-system.mdx](./src/app/work/projects/building-once-ui-a-customizable-design-system.mdx)).
- Create a new `.mdx` file in this directory to add a new project. The file name will become the URL slug.

## 4. Managing Blog Posts

Similar to projects, your blog posts are written in MDX.

**Directory:** [`src/app/blog/posts/`](./src/app/blog/posts)

**How to edit or add blog posts:**
- Edit existing posts (e.g., [content.mdx](./src/app/blog/posts/content.mdx)).
- Create a new `.mdx` file in this directory to publish a new post.

## 5. Environment Variables (Optional)

If you are using protected routes or need to configure other secrets (like Mailchimp API keys if applicable), you can edit your environment file.
[**Edit .env.example**](./.env.example) (Copy to `.env` to apply)

---

### Quick Start Checklist

- [ ] Open [content.tsx](./src/resources/content.tsx) and replace `Selene Yu` with your details.
- [ ] Open [once-ui.config.ts](./src/resources/once-ui.config.ts) and set your custom domain and colors.
- [ ] Replace placeholder images in `public/images/` with your own.
- [ ] Edit or remove the default projects in `src/app/work/projects/`.
- [ ] Edit or remove the default blog posts in `src/app/blog/posts/`.
