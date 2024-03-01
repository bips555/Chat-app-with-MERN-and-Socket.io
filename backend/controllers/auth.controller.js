import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genereateTokenAndSetCookie from "../utilities/generatejwt.js";
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
      //Generating jwt token here
      genereateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePicture: newUser.profilePicture,
        message: "user registered successfully",
      });
    } else {
      res.status(400).json({
        error: "Invalid user Data.",
      });
    }
  } catch (error) {
    console.log("Error in SignupController", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = bcrypt.compare(password, user?.password || "");

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Username or password" });
    }
else{
    genereateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePicture: user.profilePicture,
      message: "User logged in successfully",
    });
  }
 }catch (error) {
    console.log("Error in LoginController", error.message);
    res.status(400).json({ error: "Internal server errror" });
  }
};
export const logoutController = async (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"Logged Out successfully"})
  } catch (error) {
    console.log("Error in LoginController", error.message);
    res.status(400).json({ error: "Internal server errror" });
  }
};
