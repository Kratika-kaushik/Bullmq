const { msgModel } = require('./dbconnection/connection');
const { Worker } = require('bullmq');
const redis = require('./redisconnection/redis');
let count = 0


const myWorker = new Worker('orders', async (job) => {
    console.log(JSON.parse(job.data), "&***************************");
        let result = await msgModel.create(JSON.parse(job.data));
    console.log("inside process");
    count = count + 1;
    console.log(job.data);
    console.log(`${count} records are processed from consumer1!`);
}, {connection: redis})

myWorker.on('completed', job => {
    console.log(`${job.id} has completed!`);
  });
  
  myWorker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
  });


// module.exports = { ordersProcess };