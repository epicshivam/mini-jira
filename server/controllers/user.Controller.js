import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email });
  if (isUserAlreadyExist) {
    return res.status(400).json({ message: "User already exist." });
  }

  const hashPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstName,
    lastName,
    email,
    password : hashPassword,
  });

  const token = user.generateAuthToken();

  const safeUser = {
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
    };

  res.status(201).json({ token, user : safeUser });
};