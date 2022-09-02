const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name:{type:String,require:true},
    fatherName:{type:String,require:true},
    motherName:{type:String,require:true},
    email:{type:String,require:true},
    contact:{type:Number,require:true},
    address:{type:String,require:true},
    gender:{type:String,require:true},
    city:{type:String,require:true},
    state:{type:String,require:true},
    pincode:{type:Number,require:true},
},
{timestamps:true}
)
var userModel = mongoose.model('user',userSchema);

module.exports = userModel