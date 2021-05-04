const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./Comment');

router.use('/dashboards', dashboardRoutes);
router.use('/users', ); //this is a link to show the user's account with all of the comments 

module.exports = router;
