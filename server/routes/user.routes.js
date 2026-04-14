import express from "express";
import { body } from "express-validator";
import { registerUser } from "../controllers/user.Controller.js";

const router = express.Router();

router.post('/register',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('firstName').isLength({ min: 3 }).withMessage("First Name must be atleast 3 Characters"),
    body('password').isLength({ min: 8 }).withMessage("Password Must be of atleast 8 Characters"),
  ],
  registerUser
);

export default router;