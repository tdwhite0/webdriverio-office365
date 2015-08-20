exports = {

    loginToOffice365: function(username, password, siteUrl, loginMethod) {

        if (loginMethod === "integrated" || typeof(loginMethod) === "undefined") {
            return this.url(siteUrl)
                .click('#cred_userid_inputtext')
                .keys(username)
                .click('#cred_password_inputtext')
                .keys(password)
                .waitForExist("#cred_sign_in_button")
                .submitForm("#credentials");
        }

        if (loginMethod === "adfs") {

            return this.url(siteUrl)
                .click('#userNameInput')
                .keys(username)
                .click('#passwordInput')
                .keys(password)
                .waitForExist("#submitButton")
                .submitForm("#loginForm");

        }

    }
};