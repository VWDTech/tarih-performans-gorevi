const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    dataHeader:{
        type: String,
        required: true
    },

    dataContent:{
        type: String,
        required: true
    }
},{ collection:"tar", timestamps:true})

const data = mongoose.model("tar", dataSchema)
module.exports = data