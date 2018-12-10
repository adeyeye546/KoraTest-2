var mongoose = require("mongoose");

// Counter Collection Schema
var countersSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    count: { type: Number, default: 0 }
});


module.exports = mongoose.model('Counter', countersSchema);;
