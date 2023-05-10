const express = require("express");

const server = express();
server.set("view engine", "ejs");
server.use(express.static("public"));

//Permet de récupérer les valeurs des requêtes POST
server.use(express.urlencoded({ extended: true }));

const tasks = [1, 2, 5, 12];

server.get("/", (req, res) => {
  res.render("index", { tasks });
});

// The completed task array with initial placeholders for removed task
server.post("/delete", function (req, res) {
  const taskId = req.body.id;
  console.log(taskId);
  tasks.splice(taskId, 1);
  res.redirect("/");
});

server.post("/", (req, res) => {
  const number = req.body.number;
  const description = req.body.description;
  tasks.push(number);
  res.redirect("/");
});

server.use((req, res, next) => res.status(404).render("404"));

server.listen(3000);
