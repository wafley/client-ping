import { Router } from "express";
import { submitContact } from "../controllers/contact";
import { validateRequest } from "../utils/validate";
import { contactSchema } from "../types/contact";

const router = Router();

router.post("/", validateRequest(contactSchema), submitContact);

export default router;
