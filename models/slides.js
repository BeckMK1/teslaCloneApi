const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    slides: {
        require: true,
        type:Object
    },
})

module.exports = mongoose.model('slides', dataSchema)