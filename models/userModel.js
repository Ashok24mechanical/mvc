const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  subject :{
    sub1: {
        type: Number,
        required: true
    },
    sub2: {
        type: Number,
        required: true
    },
    sub3: {
        type: Number,
        required: true
    },
    sub4: {
        type: Number,
        required: true
    },
    sub5: {
        type: Number,
        required: true
    },
  },
    total: {
        type: Number,
        required: true
    },
    phonenumber:{
        type: Number,
        required: true
    },
    ak: {
        type: String,
        required: true
    }
    // createdAt: {
    //     type: Date,
    //     default: Date.now()
    //     // required: true
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now()
    // }

})
module.exports = mongoose.model('User', Schema);
