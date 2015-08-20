var BASE_LOGIN_URL = "https://login.microsoftonline.com/login.srf?wa=wsignin1.0&wreply=";

module.exports = {

    loginToOffice365: function(username, password, siteUrl, loginMethod) {

        if (loginMethod === "integrated" || typeof(loginMethod) === "undefined") {
            return this.url(BASE_LOGIN_URL + siteUrl)
                .waitForExist("#cred_sign_in_button")
                .click('#cred_userid_inputtext')
                .keys(username)
                .click('#cred_password_inputtext')
                .keys(password)
                .submitForm("#credentials");
        }

        if (loginMethod === "adfs") {

            return this.url(BASE_LOGIN_URL + siteUrl)
                .waitForExist("#submitButton")
                .click('#userNameInput')
                .keys(username)
                .click('#passwordInput')
                .keys(password)
                .submitForm("#loginForm");

        }

    }
};