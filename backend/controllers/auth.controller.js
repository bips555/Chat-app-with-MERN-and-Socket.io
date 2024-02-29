import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signupController = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json({
        error: "Passwords donot match",
      });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname: fullname,
      username: username,
      password: hashedpassword,
      gender: gender,
      profilePicture: gender === "male" ? boyprofilepic : girlprofilepic,
    });
    if (newUser) {
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({
        error: "Invalid user Data.",
      });
    }
  } catch (error) {
    console.log("error in server", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const loginController = (req, res) => {
  res.send("signup user");
};
