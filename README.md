# Overview
Repo: [https://github.com/slingr-stack/twilio-package](https://github.com/slingr-stack/twilio-package)

This package provides direct access to the Twilio SMS API, allowing easy integration of Twilio messaging functionalities into your applications.
## Configuration Parameters

#### Auth Token
The authorization token for twilio accounts. You can find it in [Twilio console](https://console.twilio.com/) once you have an account created.

**Name**: `authToken`
**Type**: text
**Mandatory**: true

#### Account SID
A 34 character string that uniquely identifies the account. You can find it in [Twilio console](https://console.twilio.com/) once you have an account created.

**Name**: `accountSid`
**Type**: text
**Mandatory**: true

# JavaScript API

## HTTP requests
You can make `GET`,`PUT`,`POST` and `DELETE` requests to the [Twilio API](https://www.twilio.com/docs/usage/api) like this:
```javascript
var response = pkg.twilio.api.get('/Accounts/{SID}/Messages.json')
var response = pkg.twilio.api.post('/Accounts/{SID}/Messages.json', body)
```

### Send SMS helper
The Twilio package have a specific helper to send an SMS:
```javascript
var to = "+5492615665251";
var from = + "+17816791663";
var body = "This is the message content!";
var response = pkg.twilio.messages.sendSMS(to, from, body);
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Dependencies
* HTTP Service (Latest Version)

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
