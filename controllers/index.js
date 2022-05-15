const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const postRoutes = require('./postRouts');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/post', postRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;