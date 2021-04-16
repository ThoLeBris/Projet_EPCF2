const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminName:{
        type: String,
        required: true
    },
    adminEmail:{
        type: String, match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
        unique: true,
        required: true
    },
    password:{
        type: String, 
        // match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!#$%&'"*+/=?^_`{|}~-])[0-9a-zA-Z.!#$%&'"*+/=?^_`{|}~-]{8,}$/,
        required: true
    },
    // isAdmin:{
    //     type: Boolean,
    //     required: false
    // }
})

module.exports = mongoose.model('Admin', adminSchema);