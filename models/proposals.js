

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const proposalSchema = new Schema({

    job_id: {
         type: Schema.Types.ObjectId, ref: 'jobs',
          required: true
         },
    freelancer_id: {
         type: Schema.Types.ObjectId, 
          required: true 
        },
    amount: { 
        type: Number,
         required: true 
        },
        while:{
            type: Number,
            required: true
        },
    proposal: {
        type:String,required: true
    },
  
  },{timestamps:true});

  module.exports = mongoose.model('proposals', proposalSchema);
