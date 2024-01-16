const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    porducts: {
        required: true,
        type: Array
    },
})

module.exports = mongoose.model('Data', dataSchema)