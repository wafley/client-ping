import { Request, Response } from "express";
import { ContactPayload } from "../types/contact";
import { createContactPage } from "../services/notion";

export const submitContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const payload = req.body as ContactPayload;

        // Call Notion service
        await createContactPage(payload);

        res.status(200).json({
            status: "success",
            message: "Contact form submitted successfully",
        });
    } catch (error) {
        console.error("Error submitting contact form:", error);
        res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
};
