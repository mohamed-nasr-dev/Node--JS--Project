const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: { 
        type: Number, 
        required: true 
    },
    comment: String,
    datePosted: { 
        type: Date, 
        default: Date.now 
    },
    userID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    jobID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Job', 
        required: true 
    }
});

const reviwModel= mongoose.model('Review', reviewSchema);
module.exports = reviwModel