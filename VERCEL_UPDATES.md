# Updating Vercel Deployment

## Automatic Deployment (If Connected to GitHub)

If you've connected your GitHub repository to Vercel, deployments happen automatically:

### Process:
1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin master
   ```
3. Vercel automatically detects the push
4. Deployment starts automatically
5. Your app updates within 1-2 minutes

### Monitor Deployments:
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your `bird-fish-h` project
3. Watch real-time deployment status
4. See deployment logs in the "Deployments" tab

---

## Manual Deployment (If Not Connected to GitHub)

### Using Vercel CLI:

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. From your project directory, redeploy:
   ```bash
   vercel --prod
   ```

3. Confirm when prompted
4. Wait for deployment to complete

### Using Web UI:

1. Go to [vercel.com](https://vercel.com)
2. Dashboard → Select `bird-fish-h`
3. Click "Redeploy" button (if available)
4. Confirm deployment

---

## Common Update Scenarios

### Scenario 1: Update Animal Images
```bash
# Add new/updated image
cp /path/to/new-image.jpg assets/images/species-id.jpg
git add assets/images/species-id.jpg
git commit -m "Update species-id image"
git push origin master
# Vercel deploys automatically in 1-2 minutes
```

### Scenario 2: Fix Bug or Update Code
```bash
# Edit app.js or other files
nano app.js
git add app.js
git commit -m "Fix: description of change"
git push origin master
```

### Scenario 3: Add New Species
```bash
# Edit app.js to add species data
# Add image to assets/images/
git add app.js assets/images/new-species.jpg
git commit -m "Add new species: Name"
git push origin master
```

### Scenario 4: Update Language Strings
```bash
# Edit i18n in app.js
git add app.js
git commit -m "Update translations"
git push origin master
```

---

## Deployment Status

### Check Current Status:
1. **Vercel Dashboard**: Shows real-time status
2. **GitHub**: Shows deployment status on PR/commits
3. **URL**: Visit `https://bird-fish-h.vercel.app` to test

### Rollback to Previous Version:
1. Go to Vercel Dashboard
2. Find the deployment you want
3. Click the three dots (⋯)
4. Select "Promote to Production"

---

## Preview Deployments (Optional)

If you create branches and push to GitHub, Vercel creates preview URLs:

```bash
git checkout -b feature/add-new-species
# Make changes
git commit -m "Add new species"
git push origin feature/add-new-species
```

Vercel will:
- Create a preview deployment
- Post a comment on GitHub with preview URL
- Update preview automatically on new commits
- Can be merged to master when ready

---

## Environment Variables (If Needed)

1. Dashboard → Settings → Environment Variables
2. Add any secrets needed
3. Redeploy to apply changes

---

## Common Issues & Solutions

### Images Not Updating
- **Problem**: Old images still showing
- **Solution**: 
  - Clear browser cache (Ctrl+Shift+Del)
  - Hard refresh (Ctrl+F5 or Cmd+Shift+R)
  - Wait 24 hours for CDN cache to clear

### Changes Not Live
- **Problem**: Pushed to GitHub but changes not visible
- **Solution**:
  - Check Vercel deployment status (should show as "Ready")
  - Wait 1-2 minutes for deployment
  - Check you pushed to correct branch (master)
  - Hard refresh browser cache

### Build Errors
- **Problem**: Red X on deployment in Vercel
- **Solution**:
  - Go to Vercel Dashboard
  - Click on failed deployment
  - Read error logs at bottom
  - Fix the error locally
  - Push again

---

## Useful Commands

```bash
# Check git status
git status

# View recent commits
git log --oneline

# See what changed
git diff HEAD~1

# Undo last commit (before push)
git reset --soft HEAD~1

# Force push (use carefully!)
git push origin master --force
```

---

## Your Current Setup

**Repository**: https://github.com/Lana-23/bird-fish-h
**Vercel Project**: https://bird-fish-h.vercel.app
**Branch**: master

**To update**: Just push to master on GitHub!

```bash
git push origin master
```

That's it! Vercel handles the rest automatically. ✨
