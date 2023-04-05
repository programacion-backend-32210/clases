import { Router } from "express";
import sessionsController from "../controllers/sessions.controller.js";

const router = Router()

router.post('/login', sessionsController.login)
router.post('/register', sessionsController.register)

export default router