import express, { Request, Response } from "express";
import { corsMiddleware } from "./config/cors";
import fs from "fs";
import path from "path";

import morgan from "morgan";
import { logger } from "./utils/logger";

const app = express();

// Middleware
app.use(
    morgan("dev", {
        stream: {
            write: (message) => logger.http(message.trim()),
        },
    }),
);
app.use(corsMiddleware);
app.use(express.json());

// Basic health check route
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
});

// Dynamic Route Loading
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith(".ts") || file.endsWith(".js")) {
        const routeName = file.split(".")[0];
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const routeModule = require(path.join(routesPath, file)).default;
        app.use(`/api/${routeName}`, routeModule);
    }
});

export default app;
