import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import Usager from '../models/Usager.js'
import { createError } from '../middleware/error.js';


//Register user
export const registerUser = asyncHandler(async (req, res) => {

  const { username, email, city, password } = req.body;

  if (!username || !email || !city || !password) {
    res.status(400)
    throw new Error('Veuillez ajouter tous les champs')
  }

  //check if user exist
  const userExists = await Usager.findOne({ username })

  if (userExists) {
    res.status(400)
    throw new Error("L'utilisateur existe déjà")
  }
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const newUser = new Usager({
    username: req.body.username,
    email: req.body.email,
    city: req.body.city,
    img: req.body.img,
    password: hashedPassword,
  })
  await newUser.save()
  res.redirect("/login");

  if (newUser) {
    return res.status(201).json({ status: "ok" })
  } else {
    res.status(400)
    throw new Error('Données utilisateur invalides')
  }
})

//login user
export const loginUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await Usager.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    if (user.isAdmin === true) {
      res.redirect("/admin");
    }
    res.redirect("/user");
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });

  } catch (err) {
    next(err);
  }
})

