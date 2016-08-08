/*
 This file encapsulate all of the text tokens, though it is optional, it offers a few advantage if used:
    1. Avoid magical string and typo
    2. Allow the possibility code to check if any tokens are missing for particular language
    3. Allow easy refactoring in case a token value needs to be renamed
    4. Allow the possibility to check if template or code consists of invalid token
 */

var TEXT_TOKEN = {
    USERNAME : 'username',
    PASSWORD : 'password',
    LOGIN: 'login',
    BAD_LOGIN: 'bad_login',
    LOGIN_SUCCESS : 'login_success',
    ERROR_PREFIX : 'error_',
    LANGUAGE_PREFIX: 'language_'
};