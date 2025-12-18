import express from "express";
import { savePost, profilePosts } from "../controllers/user.controller.js";
import { verifyToken } from "../lib/verifyToken.js";

const router = express.Router();

router.post("/save", verifyToken, savePost);
router.get("/profilePosts", verifyToken, profilePosts);

export default router;
