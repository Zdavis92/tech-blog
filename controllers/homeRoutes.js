const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('homepage',  {loggedIn: true});
    } else {
        res.render('homepage');
    }
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.render('homepage',  {loggedIn: true});
    } else {
        res.render('signup');
    }
});

module.exports = router;