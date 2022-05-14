const router = require('express').Router();
const sequelize = require('../config/connections');

router.get('/', (req, res) => {
    res.render('homepage');
})

module.exports = router;