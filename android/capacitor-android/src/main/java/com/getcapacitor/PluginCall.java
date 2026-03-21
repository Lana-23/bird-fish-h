package com.getcapacitor;

import org.json.JSONObject;

/**
 * Plugin call for Capacitor.
 */
public class PluginCall {
    private String callbackId;
    private String methodName;
    private JSONObject data;
    
    public PluginCall(String callbackId, String methodName, JSONObject data) {
        this.callbackId = callbackId;
        this.methodName = methodName;
        this.data = data;
    }
    
    public String getCallbackId() {
        return callbackId;
    }
    
    public String getMethodName() {
        return methodName;
    }
    
    public JSONObject getData() {
        return data;
    }
    
    public String getString(String key) {
        if (data != null && data.has(key)) {
            try {
                return data.getString(key);
            } catch (Exception e) {
                return null;
            }
        }
        return null;
    }
    
    public int getInt(String key, int defaultValue) {
        if (data != null && data.has(key)) {
            try {
                return data.getInt(key);
            } catch (Exception e) {
                return defaultValue;
            }
        }
        return defaultValue;
    }
}
