const mongoose = require('mongoose')

// Helper Schema

const SectionSchema = mongoose.Schema({
    date: {
        type: String,
    },
    day: {
        type: String,
    },
    sectionA: {
        type: String,
    },
    sectionB: {
        type: String,
    },
    sectionC: {
        type: String,
    },
    sectionD: {
        type: String,
    },
    sectionE: {
        type: String,
    },
    sectionF: {
        type: String,
    }
})

const Party = (module.exports = mongoose.model('Section', SectionSchema))
