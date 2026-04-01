# VK Mini Apps Deployment Guide

## Overview
This guide explains how to deploy Bird & Fish Tracker to VK (VKontakte) Mini Apps platform for mobile and web.

## Files Added for VK Integration

1. **vk.html** - Special entry point optimized for VK Mini Apps
2. **app-vk.js** - VK-optimized version of the app with VK Bridge integration
3. **vk-mini-apps.json** - VK Mini Apps manifest file

## VK Bridge Features

The app uses VK Bridge API for:
- Initializing VK environment
- Setting header colors to match app theme
- Detecting VK Mobile App vs VK Web environment
- Handling VK-specific events (view show/hide, window closed)
- Getting client version information

## Deployment Steps

### 1. Prepare Your App

1. Update the VK-specific meta tags in `vk.html`:
   ```html
   <meta name="vk:app-id" content="YOUR_VK_APP_ID">
   ```

2. Update `vk-mini-apps.json` with your app information:
   - Replace icon URLs with actual URLs
   - Update cover image URL
   - Customize app name and description

### 2. Create VK Mini App

1. Go to [VK Developers](https://vk.com/dev)
2. Create a new app or select existing one
3. Navigate to "Mini Apps" section
4. Configure your Mini App:
   - **App ID**: Will be assigned by VK
   - **Name**: Bird & Fish Tracker
   - **Description**: Track and log your bird and fish sightings
   - **Icon**: Upload 576x576px icon
   - **Cover**: Upload cover image

### 3. Configure App Settings

1. **App Type**: Select "Mini App"
2. **App URL**: Set to your hosting URL (e.g., `https://your-domain.com/vk.html`)
3. **Desktop URL**: Same as App URL for web version
4. **Mobile URL**: Same as App URL for mobile version

### 4. Upload to Hosting

The app can be hosted on:
- **Vercel** (recommended): `vercel deploy`
- **GitHub Pages**: Push to gh-pages branch
- **Any static hosting**: Upload all files

Required files for VK:
- `vk.html`
- `app-vk.js`
- `styles.css`
- All JavaScript data files (`*.js`)
- `assets/images/` folder

### 5. Submit for Moderation

1. In VK Developers console:
   - Fill in app description (Russian recommended)
   - Add screenshots
   - Select categories: Lifestyle, Education
   - Set supported languages: en, ru

2. Submit for VK moderation
3. Wait for approval (typically 1-3 business days)

### 6. Test in VK

**VK Mobile App:**
- Open VK app on iOS/Android
- Search for your Mini App
- Test all features

**VK Web:**
- Open VK.com in browser
- Navigate to Apps section
- Find and test your Mini App

## VK Bridge API Usage

### Initialization
```javascript
vkBridge.send('VKWebAppInit')
    .then(data => console.log('VK initialized:', data));
```

### Set Header Color
```javascript
vkBridge.send('VKWebAppSetHeaderColor', { color: '#1a1a2e' });
```

### Subscribe to Events
```javascript
vkBridge.subscribe((event) => {
    console.log('VK event:', event);
});
```

### Environment Detection
```javascript
const userAgent = navigator.userAgent.toLowerCase();
if (userAgent.includes('vkapp')) {
    // Running in VK Mobile App
} else if (userAgent.includes('vk.com')) {
    // Running in VK Web
}
```

## Testing Locally

To test VK integration locally:

1. Include VK Bridge in your HTML:
   ```html
   <script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>
   ```

2. Run a local server:
   ```bash
   npx serve .
   ```

3. Open in browser - VK Bridge will gracefully fail in browser mode

## Troubleshooting

### App doesn't load in VK
- Check that all URLs are HTTPS
- Verify CORS headers are set correctly
- Ensure vk.html is accessible

### VK Bridge not working
- Check browser console for errors
- Verify VK Bridge script is loaded
- Test in actual VK environment (not just browser)

### Styling issues
- Check viewport meta tags
- Test on actual mobile devices
- Verify overscroll-behavior is set

## Additional VK Features

Consider implementing:
- **VK Pay**: For in-app purchases
- **VK Share**: Share sightings to VK wall
- **VK Community**: Link to app community
- **VK Analytics**: Track usage statistics
- **VK Notifications**: Push notifications for users

## Resources

- [VK Mini Apps Documentation](https://dev.vk.com/mini-apps)
- [VK Bridge API](https://dev.vk.com/bridge/overview)
- [VK Developers Console](https://dev.vk.com/)

## Support

For questions about VK Mini Apps deployment:
- VK Developers Documentation: https://dev.vk.com/
- VK Community for Developers: https://vk.com/dev_community
