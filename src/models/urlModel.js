const mongoose = require('mongoose')

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
    
    urlCode: {
        required:true,
        type:String,
        unique:true,
        lowercase:true,
        trim :true},
    longUrl: {
        type:String,
        required:true,
           },
    shortUrl:{
        type:String,
        unique:true,
        required:true,
        },

})


// create a model from schema and export it
module.exports = mongoose.model('Url', URLSchema)