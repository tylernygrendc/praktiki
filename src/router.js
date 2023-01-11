import env from "dotenv";
import express from "express";
import functions from "firebase-functions";

env.config();

const router = express();

router.set('view engine', 'pug');

router.get('/auth/', (req, res) => {
    res.render("exam", {
        title: "exam",
        page: "exam"
    });
});

export const routes = functions.https.onRequest(router);
