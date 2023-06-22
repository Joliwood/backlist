const tasks = require("../../tasks.json");

const homeController = {
  async homePage(req, res) {
    if (!req.session.bookmarks) {
      req.session.bookmarks = [];
      tasks.forEach((task) => {
        req.session.bookmarks.push(task);
      });
    }

    res.render("../views/index", { tasks, req });
  },

  taskUpdate(req, res) {
    const newTask = {
      number: req.body.number,
      created_at: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
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
