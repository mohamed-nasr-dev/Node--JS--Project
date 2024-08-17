const mongoose = require('mongoose')

const bcrypt = require('bcryptjs');

const validator = require('validator');
let usersSchema = mongoose.Schema({


  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
},
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true , 'Email address is required'],
    validate: [ validator.isEmail, 'invalid email' ]
  },
password: {
    type: String,
    required: true,
    minLength: 6 
},
location: {
    type: String,
    // required: true
},
profileName: {
    type: String,
    // required: true,
    trim: true
},
profPicture: {
    type: String,
    default: './static/user.png'
},
bio: {
    type: String,
},

skills :{
    type:Array,
    item:{
        type:String,
    },
    // required:true
}
,
rating: {
    type: Number,
    default: 0 
},
ProjectComplitionRate:{
   type:String,
   default:0
},
ReemploymentRate:{
    type:String,
    default:0
},
OnTimeDeliveryRate:{
    type:String,
    default:0
},
AverageSpeedOfResponse:{
    type:String,
    default:0
},
CompletedProjects:{
    type:Number,
    default:0
},
role: {
    type: String,
    enum: ['client', 'freelancer'], 

     required: true
},
timestamp: {
    type: Date,
    default: Date.now
}

})

usersSchema.pre('save',async function(next) {
    let salt=await bcrypt.genSalt(10);
    
    let hashedPassword= await bcrypt.hash(this.password, salt)
    
    this.password=hashedPassword
    
    next();
    })

const userModel = mongoose.model('user',usersSchema)
module.exports=userModel