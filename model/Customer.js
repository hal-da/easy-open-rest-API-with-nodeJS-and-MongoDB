const mongoose = require('mongoose')
const CustomerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('customer', CustomerSchema)
