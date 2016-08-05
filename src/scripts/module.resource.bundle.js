(function () {
    var module = angular.module('ngResourceBundle');
    module.config(["$translateProvider", function ($translateProvider) {

        var en_translations = {
            "username": "Username",
            "password": "Password",
            "login": "Login",
            "bad_login": "Bad Login",
            "login_success": "Congratulations, you have login successfully",
            "error_101": 'Sorry, your login information is incorrect.' //login error
        };

        var zh_translations = {
            "username": "用户名",
            "password": "密码",
            "login": "登录",
            "bad_login": "模拟失败",
            /*"login_success": "恭喜, 登陆成功!",*/ // This one is intentionally commented out, so the language would fallback to English
            "error_101": '对不起, 您的登陆数据出错' //login error
        };

        $translateProvider
            .translations(LANGUAGE_CODE.ENGLISH, en_translations)
            .translations(LANGUAGE_CODE.CHINESE, zh_translations)
            .fallbackLanguage(LANGUAGE_CODE.ENGLISH);
    }]);
}());


