const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderName:{
        type: String,
        required: true
    },
    orderPhone:{
        type: Number,
        required: true
    },
    orderAddress:{
        type: String,
        required: true
    },
    orderEmail:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema);