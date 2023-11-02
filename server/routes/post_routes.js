const express=require("express");


const router=express.Router()
const {GET_POST_PAGE,POSTING_POST_PAGE}=require("../controllers/post_function.js")

router.route("/").get(GET_POST_PAGE).post(POSTING_POST_PAGE)
module.exports=router