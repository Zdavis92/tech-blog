const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;