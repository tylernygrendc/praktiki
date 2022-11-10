import env from "dotenv";
import express from "express";
import functions from "firebase-functions";

env.config();

const router = express(),
    port = 3000;

router.get('/', (req, res) => {
    //   res.render(default, {});
});

router.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

export const routes = functions.https.onRequest(router);
