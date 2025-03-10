# Overview
Repo: [https://github.com/slingr-stack/twilio-package](https://github.com/slingr-stack/twilio-package)

This [package](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/packages/) provides direct access to the Twilio SMS API, allowing easy integration of Twilio messaging functionalities into your applications.

## Configuration

#### Account SID
A 34 character string that uniquely identifies the account. You can find it in [Twilio console](https://console.twilio.com/) once you have an account created.

**Name**: `accountSid`
**Type**: text
**Mandatory**: true

#### Auth Token
The authorization token for twilio accounts. You can find it in [Twilio console](https://console.twilio.com/) once you have an account created.

**Name**: `authToken`
**Type**: password
**Mandatory**: true

#### Webhooks URL
The URL to configure in webhooks of your Twilio App.
(Take a look at the [Twilio documentation](https://www.twilio.com/docs/usage/webhooks/messaging-webhooks).)

**Name**: `webhooksUrl`
**Type**: label

#### Twilio API URL
The URL of the Twilio API where the requests are performed.
(Take a look at the [Twilio documentation](https://www.twilio.com/docs/usage/webhooks/messaging-webhooks).)

**Name**: `TWILIO_API_BASE_URL`
**Type**: label

# JavaScript API

## HTTP requests
You can make `GET`,`POST` and `DELETE` requests to the [Twilio API](https://www.twilio.com/docs/usage/api) like this:
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
var response = pkg.twilio.api.messages.sendSMS(to, from, body);
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Events
### Webhook

Incoming webhook events are automatically captured by the default listener named `Catch HTTP twilio events`, which can be found below the `Scripts` section. Alternatively, you have the option to create a new package listener. For more information, please refer to the [Listeners Documentation](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/listeners/). Please take a look at the Twilio documentation of the [Webhooks](https://www.twilio.com/docs/usage/webhooks/messaging-webhooks) for more information.

## Dependencies
* HTTP Service

## About SLINGR

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
