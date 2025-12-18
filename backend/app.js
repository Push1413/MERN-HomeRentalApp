import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./config.js";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
const corsOptions = {
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

import userRoute from "./routes/user.route.js";

// Health check endpoint
app.get("/", (req, res) => {
    res.json({
        message: "LamaEstate API is running!",
        status: "healthy",
        timestamp: new Date().toISOString()
    });
});

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// Proxy for Python ML Service
// Proxy for Python ML Service
app.post("/api/predict", async (req, res) => {
    try {
        const mlServiceUrl = process.env.ML_SERVICE_URL || "http://127.0.0.1:5000";
        const response = await fetch(`${mlServiceUrl}/predict`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error(`ML Service responded with ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("ML Service Error:", error);
        res.status(503).json({
            error: "ML Service unavailable",
            details: error.message
        });
    }
});


app.listen(PORT, () => {
    console.log(`App is listing to port: ${PORT}`);
});
