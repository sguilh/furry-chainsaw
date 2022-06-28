
let AWS = require('aws-sdk')
var sqs = new AWS.SQS({ region: '<region>' })
var params = {
    MessageBody: "this is a test message",
    QueueUrl: "<QueueUrl>"
};
const THRESHOLD = 5
var sendMessages = (params) => {
    return new Promise((_resolve, _reject) => {
        sqs.sendMessage(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
        })
    })
}
var loadSendMessages = () => {
    let sendMessagesRequests = []
    for (let index = 0; index < THRESHOLD; index++) {
        sendMessagesRequests.push(sendMessages(params))
    }
    Promise.all(sendMessagesRequests).then((sendMessagesData) => {
        console.log(sendMessagesData)
    })
}
loadSendMessages()