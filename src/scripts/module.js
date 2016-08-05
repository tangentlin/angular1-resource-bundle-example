(function(){
    "use strict";

    angular.module('ngResourceBundle', ['tmh.dynamicLocale', 'pascalprecht.translate', 'ngMaterial'])
        .config(function(tmhDynamicLocaleProvider) {
            tmhDynamicLocaleProvider.localeLocationPattern('node_modules/angular-i18n/angular-locale_{{locale}}.js');
        });


}());
