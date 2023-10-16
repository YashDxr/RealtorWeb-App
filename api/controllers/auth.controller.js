import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { customErrors } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  // const hashedPassword = bcryptjs.hashSync(password,10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save(); //takes time to save depending on internet speed
    res.status(201).json("User Created Successfully!!!");
  } catch (err) {
    // res.status(499).json(err.message);
    // next(customErrors(550,'Test Error'));
    next(err);
  }
};



export const signin = async (req,res,next) =>{
  const {email,password} = req.body;
  try{
    const validUser = await User.findOne({email});
    if(!validUser) return next(customErrors(404,"User Not Found"));
    const validPassword = await bcryptjs.compare(password,validUser.password);
    if(!validPassword) return next(customErrors(401,"Invalid Credentials"));
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET_KEY);
    const { password: pass, ...REST} = validUser._doc;                                     // delete password from response before sending response to user for security purpose
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(REST);          //expires: 24*60*60

  }catch(err){
    next(err);
  }
};
