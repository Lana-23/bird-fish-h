package com.getcapacitor;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

/**
 * Base Activity for Capacitor applications.
 * This is a stub for the Android version of the app.
 * In a real Capacitor project, this would be provided by the Capacitor library.
 */
public class BridgeActivity extends Activity {
    protected Bridge bridge;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // This is a simplified stub
        // Real implementation would initialize the Capacitor Bridge
    }
    
    public Bridge getBridge() {
        return bridge;
    }
}
