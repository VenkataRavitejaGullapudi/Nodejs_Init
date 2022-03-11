const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // _id: ObjectId,
    name: String,
    price: Number
});

// Mongoose model takes 2 arguments
// 1. Name of the model
// 2. Schema of the model

module.exports = mongoose.model('Product', productSchema)