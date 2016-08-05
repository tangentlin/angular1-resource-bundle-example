(function(){
    "use strict";

    var module = angular.module('ngResourceBundle');

    function controller($translate, $dynamicLocale) {
        var model = this;

        var preferLanguage = LANGUAGE_CODE.CHINESE;

        var NO_ERROR_CODE = 0;

        model.$onInit = function() {
            model.date = new Date();

            //TODO: Research a better way to expose these constants to templates
            model.TEXT_TOKEN = TEXT_TOKEN;
            model.LANGUAGE_CODE = LANGUAGE_CODE;

            model.setLocale(preferLanguage);

            model.loginStatusLookup = {
                DEFAULT: 0,
                SUCCESS: 1,
                ERROR: -1
            };

            model.loginStatus = model.loginStatusLookup.DEFAULT;
            model.loginErrorCode = NO_ERROR_CODE;
        };

        model.setLocale = function(languageCode) {
            $translate.preferredLanguage(languageCode);
            $dynamicLocale.set(languageCode);
        };

        model.loginSuccess_click = function() {
            model.loginStatus = model.loginStatusLookup.SUCCESS;
            model.loginErrorCode = NO_ERROR_CODE;
        };


        model.loginError_click = function() {
            model.loginStatus = model.loginStatusLookup.ERROR;
            model.loginErrorCode = 101;
        };
    }

    module.component('superGreeting', {
        templateUrl: 'templates/super-greeting.html',
        controllerAs: 'model',
        controller: ['$translate', 'tmhDynamicLocale', controller]
    });

}());