const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const detailsController = require("../controllers/detailsController");
const deleteController = require("../controllers/deleteController");

router.get("/", homeController.homePage);
router.post("/", homeController.taskUpdate);

router.get("/details", detailsController.detailsPage);

router.post("/delete", deleteController.deleteTask);

router.post("/complete", homeController.completeList);

module.exports = router;
