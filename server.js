require('dotenv').config()
//console.log(process.env) 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const smsApi = require('./sms')




app.get('/send-sms', async (req, res) => {

    const to  = "+8801XXXXXXXXX"/*You can send SMS to any number. */
    const from = "ExampleName"/*Sender number or masking name */
    // generate a 5 digit token
    const token = Math.floor(Math.random() * (99999 - 10000) + 10000);
    const message = `Your Example App verification code is: ${token}`;

    var response = await smsApi.sendSMS(to, from, message)
    response.token = token
    storeToken()

    res.json(response)
})


function storeToken(to, token) {
    /*
     * Required:
     *   - Store token with the user's phone number in your database
     *   - Set token expiration
     */
}
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});