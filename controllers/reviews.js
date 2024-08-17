const reviewsModel = require('../models/reviews')

let showReviews = async(req,res)=>{

  try{
        let users = await reviewsModel.find()
    res.status(200).json({message:"success" , users})
    }catch(err){
        res.status(404).json(err)
  }

}

let saveReviews = async(req , res)=>{
    let newCategories= req.body
    try{
        let savedUser = await reviewsModel.create(newCategories)
        res.status(200).json({message:"categories saved successfully" , data : savedUser})
    }catch(err){
        res.status(404).json(err.message)
    }
}

let updatereviewsById=async(req,res)=>{
  
    try {
      let updateReview = await reviewsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({message:"category updated successfully"} )
    }
      catch (error) {
      res.json({message:error.message})
}
}


let deleteReviews= async (req,res )=>{

  let {id}=req.params
  try{
   let reviews =await reviewsModel.findByIdAndDelete(id)

     if(reviews){
       res.status(200).json({messege:"success"})
     }else{
      res.status(400).json({message:"category doesn't exist"})

     }
  }
  catch(err){
      res.status(400).json({message: err.message})

  }

  }


module.exports={showReviews , saveReviews,deleteReviews,updatereviewsById}
