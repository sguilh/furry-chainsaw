# Send Async Requests to SQS' SendMessage API
Send Asynchronous Requests to an SQS queue SendMessage API

## Prerequisites
- Node https://nodejs.org/en/download/
- SQS setup https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html
- Create queue https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-getting-started.html#step-create-queue

## How to run

0. Replace ```<region>``` and ```<QueueUrl>``` with the corresponding values from your resource. Adjust the value assigned to ```THRESHOLD``` for the amount of requests you require.
1. Install dependencies:

    ```npm install```

2. Run script:

    ```npm start```