const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'user_id',
            'body',
            'created_at'
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        if (req.session.loggedIn) {
            res.render('homepage',  {loggedIn: true, posts});
        } else {
            res.render('homepage', { posts });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.render('homepage',  {loggedIn: true});
    } else {
        res.render('signup');
    }
});

router.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.get('/users', (req, res) => {
    User.findAll({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }) 
})

module.exports = router;