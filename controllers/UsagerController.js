import Usager from '../models/Usager.js'
import asyncHandler from 'express-async-handler';



//update
export const updateUser = asyncHandler(async (req, res) => {
    try {
        const updateUser = await Usager.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete
export const deleteUser = asyncHandler(async (req, res) => {
    try {
        await Usager.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

//get hotel
export const getUser = asyncHandler(async (req, res) => {
    try {
        const user = await Usager.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)

    }
})


//get all hotels
export const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const Users = await Usager.find(req.params.id);
        res.status(200).json(Users)
    } catch (err) {
        res.status(400)
    }
})