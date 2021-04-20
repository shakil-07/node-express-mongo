const mongoose=require('mongoose')
const dbSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    time:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('db',dbSchema);