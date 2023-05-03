import env from "dotenv";
import express from "express";
import functions from "firebase-functions";

env.config();

const router = express();

router.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.status(200)
        .render("product", {
            page: "product"
        });
});

router.get('/auth', (req,res) => {
    res.status(200)
        .render("auth", {
            page: "auth"
        });
});

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

router.get('/auth/billing', (req, res) => {
    res.status(200)
        .render("billing", {
            page: "billing"
        });
});

router.get('/auth/business', (req, res) => {
    res.status(200)
        .render("business", {
            page: "business"
        });
});

router.get('/auth/tasks', (req, res) => {
    res.status(200)
        .render("tasks", {
            page: "tasks"
        });
});

router.get('/auth/chat', (req, res) => {
    res.status(200)
        .render("chat", {
            page: "chat"
        });
});

router.get('/auth/account', (req, res) => {
    res.status(200)
        .render("account", {
            page: "account"
        });
});

export const routes = functions.https.onRequest(router);
