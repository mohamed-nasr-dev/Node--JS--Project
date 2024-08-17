const express = require('express')
let router = express.Router()
let {author,restrictTo}=require('../middlewares/authorization')

let {showReviews , saveReviews,deleteReviews,updatereviewsById} = require('../controllers/reviews')

router.get('/' , showReviews)
router.post('/' ,author,restrictTo("client"), saveReviews)
router.delete('/:id' , restrictTo("client"),deleteReviews)
router.patch('/:id' ,restrictTo("client"), updatereviewsById)



module.exports=router