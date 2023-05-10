const express = require("express");

const server = express();
server.set("view engine", "ejs");
server.use(express.static("public"));

//Permet de récupérer les valeurs des requêtes POST
server.use(express.urlencoded({ extended: true }));

const tasks = require("./tasks.json");

server.get("/generate-error", (req, res, next) => {
  const error = new Error("Custom Error");
  error.status = 500;
  next(error);
});

server.get("/", (req, res) => {
  res.render("index", { tasks, req });
});

server.get("/details", (req, res) => {
  res.render("details", { tasks, req });
});

server.post("/delete", function (req, res) {
  const taskId = req.body.id;
  tasks.splice(taskId, 1);
  res.redirect("/");
});

server.post("/", (req, res) => {
  const newTask = {
    number: req.body.number,
    ip: req.ip,
  };
  tasks.push(newTask);
  res.redirect("/");
});

server.use((req, res, next) => res.status(404).render("404"));

server.listen(3000);
