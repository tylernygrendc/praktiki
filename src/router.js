import env from "dotenv";
import express from "express";
import functions from "firebase-functions";

env.config();

const router = express();

router.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.status(200)
        .render("productPage", {
            page: "Login or Sign Up"
        });
});

router.get('/auth/file-app', (req, res) => {
    res.status(200)
        .render("fileApp", {
            page: "File"
        });
});

router.get('/auth/schedule-app', (req, res) => {
    res.status(200)
        .render("scheduleApp", {
            page: "Schedule"
        });
});

router.get('/auth/billing-app', (req, res) => {
    res.status(200)
        .render("billingApp", {
            page: "Billing"
        });
});

router.get('/auth/business-app', (req, res) => {
    res.status(200)
        .render("businessApp", {
            page: "Business"
        });
});

router.get('/auth/task-app', (req, res) => {
    res.status(200)
        .render("taskApp", {
            page: "Task"
        });
});

router.get('/auth/chat-app', (req, res) => {
    res.status(200)
        .render("chatApp", {
            page: "Chat"
        });
});

router.get('/auth/account-app', (req, res) => {
    res.status(200)
        .render("account", {
            page: "Account"
        });
});

export const routes = functions.https.onRequest(router);