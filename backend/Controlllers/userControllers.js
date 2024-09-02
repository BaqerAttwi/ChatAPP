const userModule=require("../Modules/userModule");
const bcrypt=require("bcrypt");
const validator=require("validator");
const jwt=require("jsonwebtoken");
const createToken=(_id)=>{
const jwtkey=process.env.JWT_SECRET_KEY;
return jwt.sign({_id},jwtkey,{expiresIn:"3d"});
}

const registerUser=async (req,res)=>{
    try{
   const {name,email,password}=req.body;
   
   let user=await userModule.findOne({email});
   if(user) return res.status(400).json("user with given email already exist");
   if(!name || !email || !password) return res.status(400).json("ALL fields are required");
   if(!validator.isEmail(email)) return res.status(400).json("Invalid email");
   if(!validator.isStrongPassword(password)) return res.status(400).json("Invalid Paasswor, must be a strong password Capital and small(letters),number,symbol");
   user=new userModule({name,email,password});
   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(user.password,salt);
   await user.save();
   const token = createToken(user._id);
   res.status(200).json({_id:user._id,name,email,token});
}catch(error){console.log(error);res.status(500).json(error);}}
module.exports={registerUser};