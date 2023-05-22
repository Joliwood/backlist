const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const expressSession = require("express-session");
const server = express();
const viewsDirectory = path.join(__dirname, "app/views");

dotenv.config();
server.set("view engine", "ejs");
server.set("views", viewsDirectory);
server.use(express.static("public"));

server.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: "Guess it!",
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // date d'expiration d'une heure
    },
  })
);

//Permet de récupérer les valeurs des requêtes POST
server.use(express.urlencoded({ extended: true }));

const router = require("./app/router");

server.use(router);

server.use((req, res, next) => res.status(404).render("404"));

const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL;

server.listen(PORT, () => {
  console.log(`Listening on http://${BASE_URL}:${PORT}`);
});
