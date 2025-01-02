import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import { generateSecureSignature } from "@uploadcare/signed-uploads";

const app = express();
app.use(cors());

app.get("/", (_req, res) => {
    res.sendFile(path.resolve() + "/index.html");
});

app.get("/signature", (req, res) => {
    const secretKey = process.env.UPLOADCARE_SECRET_KEY;
    const { secureSignature: signature, secureExpire: expire } =
        generateSecureSignature(secretKey, {
            expire: Date.now() + 60 * 30 * 1000,
        });
    res.json({ signature, expire });
});

app.listen(3000, () =>
    console.log("Server is running on http://localhost:3000")
);
