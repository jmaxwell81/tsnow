declare interface column_renderer {
      column: GlideElement<column_renderer, glideElementType.defaultType>;
display_value: GlideElement<column_renderer, glideElementType.defaultType>;
options: GlideElement<column_renderer, glideElementType.defaultType>;
sys_id: GlideElement<column_renderer, glideElementType.defaultType>;
table: GlideElement<column_renderer, glideElementType.defaultType>;
active: GlideElement<column_renderer, glideElementType.g_boolean>;
category: GlideElement<column_renderer, glideElementType.defaultType>;
description: GlideElement<column_renderer, glideElementType.defaultType>;
media_type: GlideElement<column_renderer, glideElementType.defaultType>;
name: GlideElement<column_renderer, glideElementType.defaultType>;
scoped_name: GlideElement<column_renderer, glideElementType.defaultType>;
xml: GlideElement<column_renderer, glideElementType.defaultType>;
sys_class_name: GlideElement<column_renderer, glideElementType.defaultType>;
sys_created_by: GlideElement<column_renderer, glideElementType.defaultType>;
sys_created_on: GlideElement<column_renderer, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<column_renderer, glideElementType.defaultType>;
sys_name: GlideElement<column_renderer, glideElementType.defaultType>;
sys_package: GlideElement<column_renderer, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<column_renderer, glideElementType.defaultType>;
sys_scope: GlideElement<column_renderer, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<column_renderer, glideElementType.defaultType>;
sys_updated_on: GlideElement<column_renderer, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<column_renderer, glideElementType.defaultType>;
      _referenceKeys: never | {
        "sys_package.active": string
"sys_package.enforce_license": string
"sys_package.licensable": string
"sys_package.license_category": string
"sys_package.license_model": string
"sys_package.name": string
"sys_package.source": string
"sys_package.sys_class_name": string
"sys_package.sys_created_by": string
"sys_package.sys_created_on": string
"sys_package.sys_id": string
"sys_package.sys_mod_count": string
"sys_package.sys_updated_by": string
"sys_package.sys_updated_on": string
"sys_package.trackable": string
"sys_package.version": string
"sys_scope.can_edit_in_studio": string
"sys_scope.guided_setup_guid": string
"sys_scope.js_level": string
"sys_scope.logo": string
"sys_scope.private": string
"sys_scope.restrict_table_access": string
"sys_scope.runtime_access_tracking": string
"sys_scope.scope": string
"sys_scope.scoped_administration": string
"sys_scope.short_description": string
"sys_scope.sys_id": string
"sys_scope.template": string
"sys_scope.vendor": string
"sys_scope.vendor_prefix": string
"sys_scope.active": string
"sys_scope.enforce_license": string
"sys_scope.licensable": string
"sys_scope.license_category": string
"sys_scope.license_model": string
"sys_scope.name": string
"sys_scope.source": string
"sys_scope.sys_class_name": string
"sys_scope.sys_created_by": string
"sys_scope.sys_created_on": string
"sys_scope.sys_mod_count": string
"sys_scope.sys_updated_by": string
"sys_scope.sys_updated_on": string
"sys_scope.trackable": string
"sys_scope.version": string;
      }
    }
   