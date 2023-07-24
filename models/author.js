const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// Author is the name of our table inside of my db
module.exports = mongoose.model('Author', authorSchema)