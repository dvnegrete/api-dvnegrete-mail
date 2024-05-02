/* eslint-disable indent */
/* eslint-disable object-curly-spacing */

import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import express = require("express");
import cors = require("cors");

import { sendMail } from "./sendMail";

initializeApp();

const app = express();
app.use(cors());

app.post("/", async (req, res) => {
    try {
        await sendMail(req.body);
        res.json({ msg: `Hemos recibido tu petición ${req.body.name}.` });
    } catch (error) {
        console.log(error);
    }
});

exports.contactWeb = onRequest(app);
