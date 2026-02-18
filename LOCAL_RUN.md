# How to Run Bird & Fish Tracker Locally

This is a static HTML/CSS/JS app - no build process or dependencies needed! Just open it in a browser or use a local server.

## Option 1: Direct Browser (Easiest)

Simply open the file in your browser:

**macOS/Linux:**
```bash
cd /Users/svetik/Projects/bird-fish-h
open index.html
# or
firefox index.html
```

**Windows:**
```bash
# Right-click index.html → Open with → Your browser
# Or drag index.html into your browser
```

⚠️ **Note:** LocalStorage may have restrictions with `file://` URLs. Use a local server instead for full functionality.

---

## Option 2: Python HTTP Server (Recommended)

### Python 3 (macOS/Linux/Windows):

```bash
cd /Users/svetik/Projects/bird-fish-h
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

### Python 2 (if Python 3 not available):
```bash
cd /Users/svetik/Projects/bird-fish-h
python -m SimpleHTTPServer 8000
```

Then open: **http://localhost:8000**

---

## Option 3: Node.js HTTP Server

If you have Node.js installed:

### Using built-in server:
```bash
cd /Users/svetik/Projects/bird-fish-h
npx http-server
```

Then open: **http://localhost:8080**

### Using live-server (auto-reload):
```bash
npm install -g live-server
cd /Users/svetik/Projects/bird-fish-h
live-server
```

Auto-opens browser at **http://localhost:8080**

---

## Option 4: VS Code Live Server (If using VS Code)

1. Install extension: **"Live Server"** by Ritwick Dey
2. Right-click `index.html` → **"Open with Live Server"**
3. Browser opens automatically at **http://localhost:5500**

---

## Option 5: macOS Simple Server

```bash
cd /Users/svetik/Projects/bird-fish-h
python3 -m http.server --bind 127.0.0.1 8080
```

Then open: **http://127.0.0.1:8080**

---

## Full Development Workflow

```bash
# Navigate to project
cd /Users/svetik/Projects/bird-fish-h

# Start local server (choose one)
python3 -m http.server 8000

# In another terminal, make changes and commit
git add .
git commit -m "Your changes"
git push origin master

# Vercel auto-deploys on push
# Local server keeps running for testing
```

---

## Testing the App Locally

Once running, test these features:

✅ **Browse Species**
- Click on Birds or Fish tabs
- Filter by category
- Click cards to see details

✅ **Log Sightings**
- Go to Sightings tab
- Select species
- Choose date
- Add optional notes
- Click "Add Sighting"

✅ **View Statistics**
- Go to Stats tab
- See total and unique species
- View calendar of sightings

✅ **Language & Theme**
- Switch between English/Russian
- Toggle dark mode
- Check data persists

✅ **Check Console**
- Press F12 → Console
- Should show no errors
- Images loading correctly

---

## Troubleshooting

### "Port already in use"
Use a different port:
```bash
python3 -m http.server 9000
# Then visit http://localhost:9000
```

### Images not loading locally
- Check DevTools (F12) → Console for errors
- Images should load from `./assets/images/`
- If missing, add image files to `/assets/images/` folder

### LocalStorage not working
- Using `file://` URL? Use a local server instead
- Data persists only in same browser/domain
- Clear localStorage in DevTools if needed

### Changes not showing
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear browser cache
- Check server is still running

---

## Quick Start Command (macOS)

```bash
cd ~/Projects/bird-fish-h && python3 -m http.server 8000
```

Then open: http://localhost:8000

Stop server: Press `Ctrl+C`

---

## Deployment Reminder

After testing locally:

```bash
git add .
git commit -m "Your changes"
git push origin master
```

Vercel auto-deploys to: https://bird-fish-h.vercel.app ✨

---

**Happy testing! 🚀**
