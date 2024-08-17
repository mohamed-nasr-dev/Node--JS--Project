const { number } = require('joi');
const mongoose = require('mongoose')
let ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    // required: true
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  userId: {
    type: String,
    ref: 'User',
    // required: true
  }
});

let projectModel =  mongoose.model('Project', ProjectSchema);
module.exports = projectModel

