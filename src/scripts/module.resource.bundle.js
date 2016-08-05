(function () {
    var module = angular.module('ngResourceBundle');
    module.config(["$translateProvider", function ($translateProvider) {
        $translateProvider
            .useStaticFilesLoader({
                prefix: 'locale/',
                suffix: '.json'
            })
            .useSanitizeValueStrategy(null)
            .preferredLanguage(LANGUAGE_CODE.ENGLISH)
            .fallbackLanguage(LANGUAGE_CODE.ENGLISH);
    }]);
}());


