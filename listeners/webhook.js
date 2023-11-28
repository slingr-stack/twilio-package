/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookTwilio = {
    label: 'Catch HTTP twilio events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/twilio',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Twilio webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('twilio:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
