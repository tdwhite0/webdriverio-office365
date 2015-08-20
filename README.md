#webdriver-office365

 A plugin for webdriverio - http://www.webdriver.io/
 
 Simplifies the process for automating Office365 login.
 
 Add the command to your webdriverio client using addCommand method.
 
```
client.addCommand('loginToOffice365', helper.loginToOffice365.bind(client));
```

Parameters:

```
.loginToOffice365(username, password, siteUrl, loginMethod)
```

loginMethod can be "integrated", "adfs", or undefined

Use "integrated" if you are logging in with Azure AD. "adfs" for ADFS login.

 
```
	var webdriverio = require('webdriverio');
	var helper = require('webdriverio-office365');

	var options = {
	    desiredCapabilities: {
	        browserName: 'chrome'
	    }
	};

	client = webdriverio.remote(options);
	
	// bind the custom command to webdriverio
	client.addCommand('loginToOffice365', helper.loginToOffice365.bind(client));

	client
	    .init()
	    // direct the browser to login to Office 365
	    .loginToOffice365('someusername', 'sompassword', 'someurl')
	    .getTitle().then(function(title) {
	        console.log(title);
	    })
	    .end();
		
```
 
 
