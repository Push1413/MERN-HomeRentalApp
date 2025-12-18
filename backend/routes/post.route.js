import express from "express";
import { verifyToken } from "../lib/verifyToken.js";
import { verifyRealtor } from "../lib/verifyRole.js";
import { getPosts, getPost, getStats } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/stats", getStats);
router.get("/:id", getPost);

export default router;