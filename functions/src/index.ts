import {onRequest} from "firebase-functions/v2/https";
import express = require("express");
import * as admin from "firebase-admin";
import * as helloRouter from "./hello";
import * as eventsRouter from "./events";
import * as gamesRouter from "./games";
import * as teamsRouter from "./teams";

const app = express();

app.use("/hello", helloRouter.default);

app.use("/events", eventsRouter.default);

app.use("/games", gamesRouter.default);

app.use("/teams", teamsRouter.default);

const firebaseConfig = {
  apiKey: "AIzaSyCiQVfhfs_i69vBhq4qW9JaA9t9Ei0ELks",
  authDomain: "triviamatic-62a12.firebaseapp.com",
  projectId: "triviamatic-62a12",
  storageBucket: "triviamatic-62a12.appspot.com",
  messagingSenderId: "686286464571",
  appId: "1:686286464571:web:c96be207f9d92c8b469e1e",
};

admin.initializeApp(firebaseConfig);

exports.app = onRequest(app);
