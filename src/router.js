import env from "dotenv";
import express from "express";
import functions from "firebase-functions";

env.config();

const router = express();

router.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.status(200)
        .render("productApp", {
            page: "product app"
        });
});

router.get('/auth-app', (req,res) => {
    res.status(200)
        .render("authApp", {
            page: "authApp"
        });
});

router.get('/auth/file-app', (req, res) => {
    res.status(200)
        .render("fileApp", {
            page: "fileApp"
        });
});

router.get('/auth/schedule-app', (req, res) => {
    res.status(200)
        .render("scheduleApp", {
            page: "scheduleApp"
        });
});

router.get('/auth/billing-app', (req, res) => {
    res.status(200)
        .render("billingApp", {
            page: "billingApp"
        });
});

router.get('/auth/business-app', (req, res) => {
    res.status(200)
        .render("businessApp", {
            page: "businessApp"
        });
});

router.get('/auth/task-app', (req, res) => {
    res.status(200)
        .render("taskApp", {
            page: "taskApp"
        });
});

router.get('/auth/chat-app', (req, res) => {
    res.status(200)
        .render("chatApp", {
            page: "chatApp"
        });
});

router.get('/auth/account-app', (req, res) => {
    res.status(200)
        .render("account", {
            page: "account"
        });
});

export const routes = functions.https.onRequest(router);
