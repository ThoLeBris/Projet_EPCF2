const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminEmail:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required
    },
    idAdmin:{
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('Admin', adminSchema);