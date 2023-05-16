const express = require("express");
const path = require("path");

const server = express();
const viewsDirectory = path.join(__dirname, "app/views");
server.set("view engine", "ejs");
server.set("views", viewsDirectory);
server.use(express.static("public"));

//Permet de récupérer les valeurs des requêtes POST
server.use(express.urlencoded({ extended: true }));

const router = require("./app/router");

server.use(router);

server.use((req, res, next) => res.status(404).render("404"));

server.listen(3000);
