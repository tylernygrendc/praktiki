import express from "express";
import { onRequest } from "firebase-functions/v2/https";

const router = express();

router.set('view engine', 'pug');

router.get('/auth/file-app', (req, res) => {
    res.status(200)
        .render("fileApp", {
            title: "File",
            page: "fileApp"
        });
});

router.get('/auth/schedule-app', (req, res) => {
    res.status(200)
        .render("scheduleApp", {
            title: "Schedule",
            page: "scheduleApp"
        });
});

router.get('/auth/billing-app', (req, res) => {
    res.status(200)
        .render("billingApp", {
            title: "Billing",
            page: "billingApp"
        });
});

router.get('/auth/business-app', (req, res) => {
    res.status(200)
        .render("businessApp", {
            title: "Business",
            page: "businessApp"
        });
});

router.get('/auth/task-app', (req, res) => {
    res.status(200)
        .render("taskApp", {
            title: "Task",
            page: "taskApp"
        });
});

router.get('/auth/chat-app', (req, res) => {
    res.status(200)
        .render("chatApp", {
            title: "Chat",
            page: "chatApp"
        });
});

router.get('/', (req, res) => {
    res.status(200)
        .render("productPage", {
            title: "Login or Sign Up",
            page: "productPage"
        });
});

export const routes = onRequest(router);