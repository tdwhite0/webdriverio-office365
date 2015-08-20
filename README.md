#webdriver-office365

 A plugin for webdriverio - http://www.webdriver.io/
 
 Simplifies the process for automating Office365 login:
 
```
	var webdriverio = require('webdriverio');
	var helper = require('webdriverio-office365');

	var options = {
	    desiredCapabilities: {
	        browserName: 'chrome'
	    }
	};


	client = webdriverio.remote(options);


	client.addCommand('loginToOffice365', helper.loginToOffice365.bind(client));

	client
	    .init()
	    .loginToOffice365('someusername', 'sompassword', 'someurl')
	    .getTitle().then(function(title) {
	        console.log(title);
	    })
		.end();
		
```
 
 
