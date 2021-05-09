const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const userRoutes = require('./UserRoutes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes); 

module.exports = router;
