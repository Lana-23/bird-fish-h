# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your repository to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/bird-fish-tracker.git
git branch -M main
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Select your GitHub repository
5. Click "Import"
6. Vercel will automatically detect the project settings
7. Click "Deploy"

### Option 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy from project directory:
```bash
vercel
```

3. Follow the prompts and confirm deployment

### Option 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create account
3. Drag and drop your project folder
4. Vercel will automatically deploy

## Environment

This is a static HTML/CSS/JS application with:
- No backend required
- No build process needed
- LocalStorage for data persistence
- Works offline after initial load

## Configuration

`vercel.json` includes:
- Clean URL routing
- Cache headers for performance
- Fallback to index.html for SPA behavior

## Features After Deployment

✓ Automatic HTTPS
✓ Global CDN
✓ Automatic deployments on git push (with GitHub)
✓ Preview deployments for branches
✓ Analytics dashboard
✓ Custom domain support

## Post-Deployment

1. Access your app at: `https://your-project.vercel.app`
2. Add custom domain in Vercel dashboard (optional)
3. Share the URL with users

## Troubleshooting

**Images not loading:**
- Verify image files are in `/assets/images/` folder
- Image names must match species IDs (e.g., `golden-eagle.jpg`)

**Data not persisting:**
- This is expected - LocalStorage is browser-specific
- Each browser instance has separate data
- Data persists between sessions on same browser

**GitHub integration not working:**
- Ensure GitHub account is connected to Vercel
- Grant Vercel access to your repositories

## Data Backup

To backup user data before deployment:
1. Open DevTools (F12)
2. Go to Application → LocalStorage
3. Export `sightings` key contents

## Telegram Mini App Setup

To use as a Telegram Mini App:
1. Deploy to Vercel
2. Get your deployed URL: `https://your-project.vercel.app`
3. Create a Telegram bot with @BotFather
4. Set webhook or bot commands
5. Add the Vercel URL as the web app URL
6. Users access via bot menu or inline button

## Analytics

Monitor deployment:
- Vercel Dashboard: Real-time analytics
- Error tracking: Built-in error reporting
- Performance: Edge function metrics

---

Happy deploying! 🚀
