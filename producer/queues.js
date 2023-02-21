const { Queue } = require('bullmq');
const Redis = require('ioredis');


let redis = new Redis({
    host: '127.0.0.1',
    port: 6379
});

redis.on('error', function (err) {
    console.log(err)
    throw err;
});

//our job queue
const orderQueue = new Queue('orders', {
    connection: redis
});

const createNewOrder = (order) => {
    console.log(order, "******************order**************");
    orderQueue.add(order.item, JSON.stringify(order), { connection: redis })
};

module.exports = { createNewOrder }