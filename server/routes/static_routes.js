const express=require("express")
const router =express.Router()
const {STATIC_Post_Page,POST_Image}=require("../controllers/static_functions.js")
router.route("/").get(STATIC_Post_Page).post(POST_Image)
module.exports=router