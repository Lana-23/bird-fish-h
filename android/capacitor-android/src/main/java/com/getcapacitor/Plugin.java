package com.getcapacitor;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.webkit.WebView;

/**
 * Base class for Capacitor plugins.
 */
public class Plugin {
    protected Bridge bridge;
    private PluginHandle handle;
    
    public void setBridge(Bridge bridge) {
        this.bridge = bridge;
    }
    
    public Bridge getBridge() {
        return bridge;
    }
    
    protected Activity getActivity() {
        return (Activity) bridge.getContext();
    }
    
    protected Context getContext() {
        return bridge.getContext();
    }
    
    protected WebView getWebView() {
        return bridge.getWebView();
    }
    
    public void startActivityForResult(PluginCall call, Intent intent, int resultCode) {
        getActivity().startActivityForResult(intent, resultCode);
    }
    
    public void freeBridge() {
        bridge = null;
    }
}
