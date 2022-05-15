//Paid account
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

function sendSMS(to, from, message) {
    return new Promise((resolve, reject) => {
        // send OTP
        client.messages.create({ body: message, from, to }).then((message) => {
            console.log(message);
            return resolve(message)
            // prompt user for token
        }).catch((err) => {
            console.log(err)
            return reject(err)
        });
    })
}

module.exports = { sendSMS }