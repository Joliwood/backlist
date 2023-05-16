const tasks = require("../../tasks.json");

const detailsController = {
  detailsPage(req, res) {
    res.render("details", { tasks, req });
  },
};

module.exports = detailsController;
