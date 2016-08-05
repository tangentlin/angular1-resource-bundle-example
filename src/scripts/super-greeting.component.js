(function(){
    "use strict";

    var module = angular.module('ngResourceBundle');

    function controller($translate) {
        var model = this;

        model.$onInit = function() {

        }
    }

    module.component('superGreeting', {
        templateUrl: 'templates/super-greeting.html',
        controllerAs: 'model',
        controller: ['$translate', controller]
    });

}());