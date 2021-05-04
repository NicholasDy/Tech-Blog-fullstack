const router = require("express").Router();
const apiRouters = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/api", apiRouters);
router.use("/", homeRoutes);

module.exports = router;
