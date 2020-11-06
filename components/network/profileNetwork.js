import express from "express";
import { show } from "../views/profileView";

const router = express.Router();
router.get("/:username", show());

export default router;
