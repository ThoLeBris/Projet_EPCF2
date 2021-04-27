const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productStock:{
        type: Boolean,
        required: true
    },
    productDescription:{
        type: String, 
        required: true
    },
    productPrice:{
        type: String, 
        required: true
    },
    productId:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema);