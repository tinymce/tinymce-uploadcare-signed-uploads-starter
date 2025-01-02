import "dotenv/config";
import express from "express";
import mustacheExpress from "mustache-express";
import path from "path";
import portfinder from "portfinder";
import session from "express-session";
import { fileURLToPath } from "url";
import { generateSecureSignature } from "@uploadcare/signed-uploads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This is the fake database that the login authenticates against
const users = [
    { username: "johndoe", password: "password", fullname: "John Doe" },
    { username: "janedoe", password: "password", fullname: "Jane Doe" },
];

const setupExpress = (port) => {
    const app = express();

    app.engine("mustache", mustacheExpress());
    app.set("view engine", "mustache");
    app.set("views", `${__dirname}/views`);

    app.set("trust proxy", 1);
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false },
        })
    );

    app.use(express.static("public"));
    app.use(express.urlencoded({ extended: false }));

    setupRoutes(app);

    app.listen(port, () =>
        console.log(
            `Image Optimizer Signed Uploads starter project is now available at: http://localhost:${port}/`
        )
    );
};

const setupRoutes = (app) => {
    app.get("/", (req, res) => {
        res.render("index");
    });

    app.get("/editor", (req, res) => {
        if (req.session.user) {
            res.render("editor", {
                apiKey: process.env.TINYMCE_API_KEY,
                uploadcarePublicKey: process.env.UPLOADCARE_PUBLIC_KEY,
                fullname: req.session.user.fullname,
            });
        } else {
            res.redirect("/");
        }
    });

    app.get("/logout", (req, res) => {
        req.session.destroy();
        res.redirect("/");
    });

    app.post("/", (req, res) => {
        const user = users.find(
            ({ username, password }) =>
                username === req.body.username && password === req.body.password
        );
        if (user) {
            req.session.user = user;
            res.redirect("/editor");
        } else {
            res.render("index", { error: "Incorrect username or password." });
        }
    });

    app.post("/signature", (req, res) => {
        const user = req.session.user;
        if (user) {
            try {
                const { secureSignature: signature, secureExpire: expire } =
                    generateSecureSignature(process.env.UPLOADCARE_SECRET_KEY, {
                        expire: Date.now() + 60 * 30 * 1000, // 30 minutes expiration
                    });
                res.json({ signature, expire });
            } catch (e) {
                res.status(500).send("Failed to generate signature.");
                console.error(e.message);
            }
        } else {
            res.status(401).send(
                "Could not produce a signature since the user is not logged in."
            );
        }
    });
};

portfinder.getPort(
    {
        port: 3000,
        stopPort: 4000,
    },
    (err, port) => {
        if (err) {
            console.error("Error:", err.message);
            process.exit(-1);
        } else {
            setupExpress(port);
        }
    }
);
