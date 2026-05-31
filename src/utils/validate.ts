import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateRequest = (schema: z.ZodTypeAny) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const result = await schema.safeParseAsync(req.body);
        if (!result.success) {
            res.status(400).json({
                status: "error",
                message: "Validation failed",
                errors: result.error.issues.map((e) => ({
                    path: e.path.join("."),
                    message: e.message,
                })),
            });
            return;
        }
        req.body = result.data;
        next();
    };
};
