const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productStock:{
        type: String,
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
    // productImage:{
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.model('Product', productSchema);