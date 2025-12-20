# Development Guide

## Using Jekyll for Development

### Start Jekyll Development Server

To develop your site locally with Jekyll:

```bash
cd /Users/samadzadeelshan/portfolio-site
bundle exec jekyll serve
```

Then open your browser to: **http://localhost:4000**

The server will automatically reload when you make changes to your files.

### Stop the Server

Press `Ctrl + C` in the terminal to stop the Jekyll server.

### Build Site (without server)

To build the site without running a server:

```bash
bundle exec jekyll build
```

The built site will be in the `_site/` folder.

### Jekyll Features

- **Auto-reload**: Changes to HTML, CSS, and JS files will automatically refresh in the browser
- **Liquid templating**: You can use Jekyll's Liquid syntax in your HTML files
- **Markdown support**: Can convert Markdown files to HTML
- **Plugin support**: jekyll-feed and jekyll-sitemap are configured

### Current Setup

- Jekyll version: 3.10.0
- Configuration: `_config.yml`
- Dependencies: Managed by `Gemfile`
- Build output: `_site/` (excluded from git)

### For GitHub Pages

When you push to GitHub, GitHub Pages will automatically:
- Build your Jekyll site
- Serve it at: https://elshansamadzada7.github.io

No additional setup needed on GitHub!

