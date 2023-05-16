const tasks = require("../../tasks.json");

const deleteController = {
  deleteTask(req, res) {
    const taskId = req.body.id;
    tasks.splice(taskId, 1);
    res.redirect("back");
  },
};

module.exports = deleteController;
