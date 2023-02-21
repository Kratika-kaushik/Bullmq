const Redis = require('ioredis');


let redis = new Redis({
    host: '127.0.0.1',
    port: 6379
});

redis.on('error', function (err) {
    console.log(err)
    throw err;
});

module.exports = { redis }