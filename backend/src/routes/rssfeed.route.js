import { Router } from "express";
import { getAllRssfeed } from "../controllers/rssfeed.controller.js";


const router = Router();

router.get("/", getAllRssfeed);

export default router;