(function () {
    var module = angular.module('ngResourceBundle');
    module.config(["$translateProvider", function ($translateProvider) {

        var en_translations = {
            "username": "Username",
            "password": "Password",
            "login": "Login",
            "bad_login": "Bad Login",
            "error_101": 'Sorry, your login information is incorrect.' //login error
        };

        var zh_translations = {
            "username": "用户名",
            "password": "密码",
            "login": "登录",
            "bad_login": "模拟失败",
            "error_101": '对不起, 您的登陆数据出错' //login error
        };

        $translateProvider.translations('en', en_translations);
        $translateProvider.translations('zh', zh_translations);
    }]);
}());


