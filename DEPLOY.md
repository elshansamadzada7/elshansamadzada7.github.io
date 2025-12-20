# Deploying to GitHub Pages

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., `portfolio-site`)
3. Don't initialize with README, .gitignore, or license

## Step 2: Connect Local Repository to GitHub

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Step 4: Update Base Path (if needed)

If your site is at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` (not root), you may need to update paths in your HTML files to use relative paths or add a base tag.

## Quick Commands Reference

```bash
# Check remote
git remote -v

# Push changes
git push origin main

# Pull latest changes
git pull origin main
```

