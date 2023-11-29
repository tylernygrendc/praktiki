import express from "express";
import { onRequest } from "firebase-functions/v2/https";

const router = express();

router.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.status(200)
        .render("main", {
            title: "Praktiki",
            page: "main"
        });
});

export const routes = onRequest(router);