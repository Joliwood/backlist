const tasks = require("../../tasks.json");
// const dataMapper = require("../database/dataMapper");

const homeController = {
  async homePage(req, res) {
    if (!req.session.bookmarks) {
      req.session.bookmarks = [];
      tasks.forEach((task) => {
        req.session.bookmarks.push(task);
      });
    }

    const todoList = req.session.bookmarks;
    // console.log(todoList);

    res.render("../views/index", { tasks, req });
  },

  taskUpdate(req, res) {
    const newTask = {
      number: req.body.number,
      ip: req.ip,
      completed: false,
    };
    tasks.push(newTask);
    req.session.bookmarks.push(newTask);
    res.redirect("/");
  },

  completeList(req, res) {
    const selectedTask = tasks[req.body.listToComplete];
    if (selectedTask.completed) {
      selectedTask.completed = false;
    } else {
      selectedTask.completed = true;
    }
    res.redirect("back");
  },
};

module.exports = homeController;
