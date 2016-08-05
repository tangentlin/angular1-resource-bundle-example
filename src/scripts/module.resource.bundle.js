(function(){
    var module = angular.module('ngResourceBundle');
    module.config(["$translateProvider",function($translateProvider){

        var en_translations = {
            "lastname" : "Family Name",
            "firstname" : "Given Name",
            "sayhello" : 'Say Hello'
        };

        var cn_translations = {
            "lastname" : "姓",
            "firstname" : "名",
            "sayhello" : '打招呼'
        };


        $translateProvider.translations('en',en_translations);

        $translateProvider.translations('cn',cn_translations);

        $translateProvider.preferredLanguage('en');

    }]);
}());


