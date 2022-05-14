const router = require('express').Router();
const { Post } = require('../models');

router.get('/',(req, res) => {
    // Post.findAll({
    //     attributes: [
    //         'id',
    //         'title',
    //         'username',
    //         'body',
    //         'created_at'
    //     ]
    // })
    // .then(dbPostData => {
    //     const posts = dbPostData.map(post => post.get({ plain: true }));
    //     res.render('dashboard', { posts, loggedIn: true });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
    res.render('dashboard');
});

module.exports = router;