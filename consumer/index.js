const Queue = require('bull');
// const { ordersProcess } = require('./orer-queue');
const redis = require('./redisconnection/redis');
console.log('consumer1 is start.......');
//our job queue
const orderQueue = new Queue('orders', {
    connection: redis
});

// orderQueue.process(ordersProcess);