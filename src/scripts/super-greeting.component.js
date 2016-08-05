(function(){
    "use strict";

    var module = angular.module('ngResourceBundle');

    function controller($translate, $dynamicLocale) {
        var model = this;

        var preferLanguage = 'zh';

        model.$onInit = function() {
            model.date = new Date();
            model.setLocale(preferLanguage);
        };

        model.setLocale = function(languageCode) {
            $translate.preferredLanguage(languageCode);
            $dynamicLocale.set(languageCode);
        };
    }

    module.component('superGreeting', {
        templateUrl: 'templates/super-greeting.html',
        controllerAs: 'model',
        controller: ['$translate', 'tmhDynamicLocale', controller]
    });

}());