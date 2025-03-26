/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookTwilio = {
    label: 'Catch HTTP Twilio events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/twilio',
        }
    },
    callback: function(event) {
        sys.logs.info('[twilio] Received Twilio webhook. Processing and triggering a package event.', event);
        sys.events.triggerEvent('twilio:webhook', event.data);
    }
};
