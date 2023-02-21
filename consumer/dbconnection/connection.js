const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/JobQueue');
const msgSchema = new mongoose.Schema({
    client: {
        type: String,
    },
    item: {
        type: String
    },
    price: {
        type: Number
    },
    datetime: {
        type: String
    }
});

const msgModel = connection.model('messages', msgSchema)
module.exports = { msgModel }