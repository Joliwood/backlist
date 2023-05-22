const tasks = require("../../tasks.json");
// const dataMapper = require("../database/dataMapper");

const homeController = {
  async homePage(req, res) {
    if (!req.session.bookmarks) {
      req.session.bookmarks = [];
    }

    const todoList = req.session.bookmarks;
    console.log(tasks);

    res.render("../views/index", { tasks, req });
  },

  taskUpdate(req, res) {
    const newTask = {
      number: req.body.number,
      ip: req.ip,
    };
    tasks.push(newTask);
    console.log(newTask);
    res.redirect("/");
  },
};

module.exports = homeController;
