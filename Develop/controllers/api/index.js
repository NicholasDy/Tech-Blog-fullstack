const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const userRoutes = require('./UserRoutes.js');

router.use('/dashboards', dashboardRoutes);
router.use('/user', userRoutes); 

module.exports = router;
