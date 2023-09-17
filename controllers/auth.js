import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const NewUser = new User({
      firstName,
      lastName,
      email,
      password:passwordHash,
      picturePath,
      friends,
      location,
      occupation,   
      viewedProfile:Math.floor(Math.random() * 10000),
      impressions:Math.floor(Math.random() * 10000),
    });
    const savedUser = await NewUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
};
