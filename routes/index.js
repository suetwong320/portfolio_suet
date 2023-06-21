const router = require("express").Router();
const homeController = require("../controllers/homeController");
const projectsController = require("../controllers/projectsController");
const contactController = require("../controllers/contactController");
const servicesController = require("../controllers/servicesController");


router.get("/" , homeController);
router.get("/projects", projectsController);
router.get("/contact" , contactController);
router.get("/services" , servicesController);


module.exports = router;