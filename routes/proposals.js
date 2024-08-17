const express = require("express");
let router = express.Router();
let {author,restrictTo}=require('../middlewares/authorization')

let {
  saveReviews,
  showReviews,
  deleteReviews,
  updatereviewsById,
} = require("../controllers/reviews");

router.get("/", showReviews);
router.post("/", saveReviews);
router.delete("/:id", deleteReviews);
router.patch("/:id", updatereviewsById);

module.exports = router;
