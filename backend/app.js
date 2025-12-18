import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./config.js";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
const corsOptions = {
    origin: process.env.CLIENT_URL,
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


app.listen(PORT, () => {
    console.log(`App is listing to port: ${PORT}`);
});
