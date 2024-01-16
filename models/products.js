const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    subTitle: {
        required: true,
        type: String
    },
    titleInfo:{
        require:true,
        type:String
    },
    price:{
        require:true,
        type:String
    },
    normalPrice:{
        require:true,
        type:String
    },
    isDemo:{
        require:true,
        type:Boolean
    },
    images:{
        require:true,
        type:Array
    },
    mainSpec1:{
        require:true,
        type:String
    },
    mainSpec2:{
        require:true,
        type:String
    },
    mainSpec3:{
        require:true,
        type:String
    },
})

module.exports = mongoose.model('Data', dataSchema)