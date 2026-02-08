# 🦅 🐟 Bird & Fish Tracker

A beautiful, interactive web application for tracking bird and fish sightings with multi-language support and statistics.

## Features

✨ **Key Features:**
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🌍 **Multi-Language** - Full support for Russian and English
- 🎨 **Dark/Light Mode** - Toggle between themes
- 🦅 **Bird Database** - 6 species (European & Tropical)
- 🐟 **Fish Database** - 8 species (River, Mediterranean & Tropical)
- 📝 **Sighting Logging** - Record what you've seen with date and notes
- 📊 **Statistics** - View detailed stats and calendar of sightings
- 💾 **Local Storage** - All data saved in browser (no server needed)

## Quick Start

1. Open `index.html` in your web browser
2. Start exploring birds and fish
3. Click on any species to see detailed information
4. Use "Sightings" tab to log what you've observed
5. Check "Stats" for your observation history

## Application Structure

### Tabs

- **🦅 Birds** - Browse European and Tropical bird species
- **🐟 Fish** - Browse River, Mediterranean, and Tropical fish
- **📝 Sightings** - Log observations and view recent sightings
- **📊 Stats** - View statistics, breakdown, and calendar view

### Data Stored

- Sighting logs with date and optional notes
- Statistics of total and unique species observed
- Calendar view of observation dates
- All data persists using browser's localStorage

## Species Categories

### Birds
- **European**: Golden Eagle, Barn Owl, Great Tit
- **Tropical**: Scarlet Macaw, Resplendent Quetzal, Bird of Paradise

### Fish
- **River**: Pike, Common Carp, Rainbow Trout
- **Mediterranean**: Sea Bream, Mediterranean Grouper
- **Tropical**: Clownfish, Blue Tang, Lionfish

## Features in Detail

### 1. Browse Species
- Tap on any card to view detailed species information
- See descriptions, images, and categorization
- Quick "Mark as Seen Today" button

### 2. Log Sightings
- Select species from dropdown
- Choose observation date
- Add optional notes
- View recent sightings list

### 3. View Statistics
- Total sightings count
- Unique species observed
- Breakdown by bird/fish
- 30-day calendar view of observations

### 4. Customization
- Switch between Russian and English
- Toggle dark mode for night viewing
- Mobile-optimized interface

## Language Support

- 🇬🇧 **English** - Full interface in English
- 🇷🇺 **Русский** - Full interface in Russian

## Color Scheme

The app uses an attractive blue-green color palette:
- Primary Blue: #0066cc
- Secondary Green: #00cc66
- Accent Light Blue: #00b3ff

### Dark Mode
Colors automatically adapt for comfortable night viewing with:
- Dark blue background
- Light green accents
- Softer text colors

## Technical Details

### Technologies
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS variables, gradients, animations
- **Vanilla JavaScript** - No dependencies required
- **LocalStorage API** - Client-side data persistence

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Installation for Telegram Mini App

To use as a Telegram Mini App:

1. Upload files to a web server (hosting)
2. In Telegram Bot settings, add the web app URL
3. Users can access via bot menu or inline button

## Usage Tips

1. **Mobile First** - The app is optimized for mobile viewing
2. **Offline Support** - Works without internet once loaded
3. **Data Privacy** - All data stored locally, never sent anywhere
4. **Backup** - Export your sightings from browser DevTools if needed

## Customization

### Add More Species
Edit `app.js` and add to `speciesData` object:

```javascript
{
    id: 'unique-id',
    name_en: 'English Name',
    name_ru: 'Русское название',
    category: 'category-name',
    description_en: 'English description',
    description_ru: 'Русское описание',
    image: 'emoji'
}
```

### Change Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00cc66;
    --accent-color: #00b3ff;
}
```

### Add Languages
1. Add translations to `i18n` object in `app.js`
2. Add option to language selector
3. Update `applyLanguage()` function

## File Structure

```
bird-fish-h/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── app.js              # Complete application logic
├── assets/             # Media files folder
└── README.md           # This file
```

## Future Enhancements

Possible improvements:
- 📸 Photo uploads for sightings
- 📍 GPS location tracking
- 🌐 Cloud sync (Firebase/Supabase)
- 🏆 Achievement system
- 🎯 Species hunting challenges
- 📤 Export/share sightings

## License

Free to use and modify for personal or commercial projects.

## Support

For questions or issues:
1. Check the Features section
2. Try clearing cache and reloading
3. Ensure JavaScript is enabled
4. Test on a different browser

---

**Happy Birding and Fish Watching! 🦅🐟**

