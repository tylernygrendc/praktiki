import env from "dotenv";
import express from "express";
import functions from "firebase-functions";

env.config();

const router = express();

router.set('view engine', 'pug');

router.get('/auth/file', (req, res) => {
    res.status(200)
        .render("file", {
            page: "file"
        });
});

router.get('/auth/schedule', (req, res) => {
    res.status(200)
        .render("schedule", {
            page: "schedule"
        });
});

export const routes = functions.https.onRequest(router);
