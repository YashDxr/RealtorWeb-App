import User from "../models/user.model.js";
import { customErrors } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "API is working",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(customErrors(401, "Unauthorized Access"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hash(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        //dont use $set : req.body -- as we only want to update the input that is provided in the update form and not all the info,
        // CHANCES OF HACK AS PEOPLE CAN SEND ((((((isAdmin: true))))))))) req to server and
        //                                                                 can turn himself to admin
        //                                                                 and gain power over your server
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
