var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    phone: { type: Number, required: true },
    message: { type: String, required: true }
});

module.exports = mongoose.model('Message', schema);