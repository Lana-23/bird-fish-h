# Bird & Fish Tracker - Android App

This is the Android version of the Bird & Fish Tracker application, built with [Capacitor](https://capacitorjs.com/).

## Prerequisites

Before building the Android app, make sure you have:

1. **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
2. **Android Studio** - [Download](https://developer.android.com/studio)
3. **Android SDK** (API level 34 recommended)
4. **Java JDK 17**

## Installation

### 1. Install Node.js dependencies

```bash
npm install
```

### 2. Sync web assets to Android

```bash
npm run sync
```

This command will:
- Copy all web files (index.html, app.js, styles.css, assets/) to `android/app/src/main/assets/public`
- Sync Capacitor plugins and configurations

## Building the App

### Option 1: Using Android Studio (Recommended)

1. Open the project in Android Studio:
   ```bash
   npm run open:android
   ```
   Or manually open `android/build.gradle` in Android Studio.

2. Wait for Gradle sync to complete.

3. Click **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**.

4. The APK will be generated at:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Option 2: Using Command Line

```bash
cd android
./gradlew assembleDebug
```

The APK will be at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Building Release APK

```bash
cd android
./gradlew assembleRelease
```

The release APK will be at:
```
android/app/build/outputs/apk/release/app-release.apk
```

## Running on Device/Emulator

### Using Android Studio
1. Connect your Android device or start an emulator
2. Click **Run** → **Run 'app'**
3. Select your device

### Using ADB
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

## Configuration

### App ID and Name
Edit `android/app/build.gradle`:
```gradle
defaultConfig {
    applicationId "com.birdfish.tracker"  // Change this
    versionCode 1                         // Increment for releases
    versionName "1.0"                     // User-visible version
}
```

### App Icon
Replace the launcher icons in:
- `android/app/src/main/res/mipmap-hdpi/`
- `android/app/src/main/res/mipmap-mdpi/`
- `android/app/src/main/res/mipmap-xhdpi/`
- `android/app/src/main/res/mipmap-xxhdpi/`
- `android/app/src/main/res/mipmap-xxxhdpi/`

Or update the vector drawable in:
- `android/app/src/main/res/drawable/ic_launcher_foreground.xml`

### App Name
Edit `android/app/src/main/res/values/strings.xml`:
```xml
<string name="app_name">Your App Name</string>
```

## Troubleshooting

### Gradle Sync Issues
```bash
cd android
./gradlew clean
./gradlew build
```

### Missing Android SDK
1. Open Android Studio
2. Go to **Tools** → **SDK Manager**
3. Install Android SDK Platform 34
4. Install Android SDK Build-Tools

### Java Version Issues
Ensure JAVA_HOME points to JDK 17:
```bash
export JAVA_HOME=/path/to/jdk-17
```

## Features

- ✅ Offline-first (works without internet)
- ✅ IndexedDB for persistent storage
- ✅ Bilingual support (English/Russian)
- ✅ Dark/Light theme
- ✅ Species catalog (birds & fish)
- ✅ Sighting tracker
- ✅ Statistics dashboard

## Project Structure

```
bird-fish-h/
├── android/                 # Android native project
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── java/       # Java source code
│   │   │   ├── res/        # Android resources
│   │   │   └── AndroidManifest.xml
│   │   └── build.gradle
│   └── build.gradle
├── assets/                  # App images
├── index.html              # Main HTML file
├── app.js                  # Main application logic
├── styles.css              # App styles
├── capacitor.config.json   # Capacitor configuration
└── package.json            # Node.js dependencies
```

## Updating the App

When you make changes to the web code:

1. Update web files (index.html, app.js, styles.css, etc.)
2. Run `npm run sync`
3. Rebuild in Android Studio

## Publishing to Google Play

1. Generate a signed APK/AAB:
   - Create a keystore: `keytool -genkey -v -keystore birdfish.keystore -alias birdfish -keyalg RSA -keysize 2048 -validity 10000`
   - Configure signing in `android/app/build.gradle`
   - Build: `./gradlew bundleRelease`

2. Upload the `.aab` file to Google Play Console

## License

Same as the main project.
