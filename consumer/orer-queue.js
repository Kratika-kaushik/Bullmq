const { msgModel } = require('./dbconnection/connection');
const { Worker } = require('bullmq');
const redis = require('./redisconnection/redis');
let count = 0

// const ordersProcess = async (job) => {
//     let result = await msgModel.create(job.data);
//     console.log("inside process");
//     count = count + 1;
//     console.log(job.data);
//     console.log(`${count} records are processed from consumer1!`);
// };

const myWorker = new Worker('orders', async (job) => {
    console.log(JSON.parse(job.data), "&***************************");
}, {connection: redis})


// module.exports = { ordersProcess };