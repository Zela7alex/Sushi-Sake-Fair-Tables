const mongoose = require('mongoose')

// Helper Schema

const PartySchema = mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    numOfGuests: {
        type: String,
    },
    date: {
        type: String,
    },
    time: { 
        type: String,
    },
    comments: {
        type: String,
    }
})

const Party = (module.exports = mongoose.model('Party', PartySchema))
