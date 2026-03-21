package com.getcapacitor;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import java.lang.annotation.ElementType;
import java.lang.annotation.RetentionPolicy;

/**
 * Annotation for Capacitor plugins.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface CapacitorPlugin {
    String id();
    String name() default "";
    String[] permissions() default {};
    String[] permissionStrings() default {};
}
