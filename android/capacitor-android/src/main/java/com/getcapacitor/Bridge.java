package com.getcapacitor;

import android.content.Context;
import android.webkit.WebView;

/**
 * Capacitor Bridge - connects JavaScript to native Android APIs.
 * This is a stub for the Android version of the app.
 */
public class Bridge {
    private Context context;
    private WebView webView;
    
    public Bridge(Context context, WebView webView) {
        this.context = context;
        this.webView = webView;
    }
    
    public Context getContext() {
        return context;
    }
    
    public WebView getWebView() {
        return webView;
    }
}
