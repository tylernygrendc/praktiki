import env from "dotenv";
import express from "express";
import functions from "firebase-functions";

env.config();

const router = express();

router.set('view engine', 'pug');

router.get('/auth/chat', (req, res) => {
    res.status(200)
        .render("chat", {
            title: "Chat",
            asset: "chat",
            description: ""
        });
});

router.get('/auth/files', (req, res) => {
    res.status(200)
        .render("files", {
            title: "Files",
            asset: "files",
            description: ""
        });
});

router.get('/auth/schedule', (req, res) => {
    res.status(200)
        .render("schedule", {
            title: "Schedule",
            asset: "schedule",
            description: ""
        });
});

router.get('/auth/terminal', (req, res) => {
    res.status(200)
        .render("terminal", {
            title: "Terminal",
            asset: "terminal",
            description: ""
        });
});

export const routes = functions.https.onRequest(router);
