package com.getcapacitor;

import org.json.JSONObject;
import org.json.JSONArray;
import java.util.Iterator;

/**
 * JavaScript Object wrapper for Capacitor.
 */
public class JSObject extends JSONObject {
    
    public JSObject() {
        super();
    }
    
    public JSObject(String json) {
        super(json);
    }
    
    public static JSObject fromJSONObject(JSONObject obj) {
        if (obj instanceof JSObject) {
            return (JSObject) obj;
        }
        try {
            return new JSObject(obj.toString());
        } catch (Exception e) {
            return new JSObject();
        }
    }
    
    @Override
    public JSObject put(String name, Object value) {
        try {
            super.put(name, value);
        } catch (Exception e) {
            // Ignore
        }
        return this;
    }
    
    public String optGetString(String key, String defaultValue) {
        try {
            return optString(key, defaultValue);
        } catch (Exception e) {
            return defaultValue;
        }
    }
    
    public Integer optGetInt(String key, int defaultValue) {
        try {
            return optInt(key, defaultValue);
        } catch (Exception e) {
            return defaultValue;
        }
    }
}
