const express= require("express");
const {registerUser, loginUser, findUser, getUsers}=require("../Controlllers/userControllers");
const router=express.Router();
router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/find/:userID",findUser)
router.get("/",getUsers)
module.exports=router;