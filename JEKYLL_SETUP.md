# Jekyll Setup Guide

## Step 1: Install Bundler (if not installed)
Open Terminal and run:
```bash
gem install bundler
```

If you get permission errors, use:
```bash
sudo gem install bundler
```

## Step 2: Install Jekyll Dependencies
Navigate to your project folder and run:
```bash
cd /Users/samadzadeelshan/portfolio-site
bundle install
```

## Step 3: Start Jekyll Server
Run this command to start the local development server:
```bash
bundle exec jekyll serve
```

## Step 4: View Your Site
Open your browser and go to:
```
http://localhost:4000
```

## Step 5: Stop the Server
Press `Ctrl + C` in the terminal to stop the server.

## Troubleshooting

### If bundle install fails:
- Make sure Ruby is installed: `ruby --version`
- Try: `gem update --system`
- On macOS, you might need: `xcode-select --install`

### If Jekyll serve fails:
- Make sure you're in the project directory
- Check that `_config.yml` exists
- Try: `bundle update`

## Your Current Setup
- ✅ `_config.yml` - Jekyll configuration
- ✅ `Gemfile` - Jekyll dependencies
- ✅ HTML files will work as-is with Jekyll
- ✅ CSS and JS files will work normally

## For GitHub Pages
Once you push to GitHub, GitHub Pages will automatically:
- Build your Jekyll site
- Serve it at: https://elshansamadzada7.github.io

No additional setup needed on GitHub!

