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
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
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

router.get('/dashboard',(req, res) => {
    if (req.session.loggedIn){
        Post.findAll({
            where: {
                user_id: req.session.user_id
            },
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
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } else {
        res.render('signup');
    }
});


module.exports = router;