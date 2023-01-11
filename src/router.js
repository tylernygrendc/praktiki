import env from "dotenv";
import express from "express";
import functions from "firebase-functions";

env.config();

const router = express();

router.set('view engine', 'pug');

router.get('/auth/files', (req, res) => {
    res.status(200)
        .render("files", {
            title: "Files",
            asset: "files",
            description: ""
        });
});

export const routes = functions.https.onRequest(router);
