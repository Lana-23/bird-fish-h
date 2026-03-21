package com.getcapacitor;

/**
 * Plugin handle for Capacitor.
 */
public class PluginHandle {
    private String id;
    private Plugin plugin;
    
    public PluginHandle(String id, Plugin plugin) {
        this.id = id;
        this.plugin = plugin;
    }
    
    public String getId() {
        return id;
    }
    
    public Plugin getPlugin() {
        return plugin;
    }
}
