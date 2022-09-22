import express from "express";
import { getAdminHomePage, getGererDoc, getGererUsager } from "../controllers/AdminController.js";

const router = express.Router();

router.get("/", getAdminHomePage)
router.get("/gererdocument", getGererDoc)
router.get("/gererusager", getGererUsager)


export default router