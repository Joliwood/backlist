const tasks = require("../../tasks.json");

const homeController = {
  homePage(req, res) {
    res.render("../views/index", { tasks, req });
  },
  taskUpdate(req, res) {
    const newTask = {
      number: req.body.number,
      ip: req.ip,
    };
    tasks.push(newTask);
    res.redirect("/");
  },
};

module.exports = homeController;
