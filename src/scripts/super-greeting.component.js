(function(){
    "use strict";

    var module = angular.module('ngResourceBundle');

    function controller($translate, $dynamicLocale) {
        var model = this;

        var NO_ERROR_CODE = 0;

        model.$onInit = function() {
            model.date = new Date();

            //TODO: Research a better way to expose these constants to templates
            model.TEXT_TOKEN = TEXT_TOKEN;
            model.LANGUAGE_CODE = LANGUAGE_CODE;

            //Current browser langauge cannot be read by JavaScript reliably
            //However, http header would have Accept-Language attributes which can be helped with the help of server or Flash.
            model.currentLanguage = LANGUAGE_CODE.ENGLISH;

            model.availableLanguages = [LANGUAGE_CODE.ENGLISH, LANGUAGE_CODE.CHINESE];

            model.setLocale(model.currentLanguage);

            model.loginStatusLookup = {
                DEFAULT: 0,
                SUCCESS: 1,
                ERROR: -1
            };

            model.loginStatus = model.loginStatusLookup.DEFAULT;
            model.loginErrorCode = NO_ERROR_CODE;
        };

        model.setLocale = function(languageCode) {
            $translate.use(languageCode);
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

        model.language_change = function(language) {
            model.currentLanguage = language;
            model.setLocale(language);
        };
    }

    module.component('superGreeting', {
        templateUrl: 'templates/super-greeting.html',
        controllerAs: 'model',
        controller: ['$translate', 'tmhDynamicLocale', controller]
    });

}());