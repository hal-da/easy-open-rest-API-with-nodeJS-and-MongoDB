const mongoose = require('mongoose')

/**
 * Kundenschema
    Vorname: String
    Nachname: String
    Adresse: 	Straße/HausNr: String
            PLZ: String
            Ort: String
    EmailAdr: String
    Kunde seit: Date
    letzter Einkauf: Date?

    {
    "firstName": "daniel",
    "lastName": "huhu",
    "adress": {
        "street": "so",
        "zip": "1234",
        "city": "viena",
        "country": "überall"
    },
    "email": "@sontgunh",
    "customerSince": "23",
    "lastPurchase": "12"
}

 */

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