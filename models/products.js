const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    porduct: {
        require: true,
        type:Object
    },
})

module.exports = mongoose.model('products', dataSchema)