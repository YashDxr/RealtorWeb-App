import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  // const hashedPassword = bcryptjs.hashSync(password,10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save(); //takes time to save depending on internet speed
    res.status(201).json("User Created Successfully!!!");
  } catch (err) {
    res.status(499).json(err.message);
  }
};
