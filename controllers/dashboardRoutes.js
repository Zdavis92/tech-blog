const router = require('express').Router();
const { Post } = require('../models');

router.get('/addPost', (req, res) => {
    if (req.session.loggedIn) {
        res.render('newPost', { loggedIn: true });
    } else {
        res.render('homepage')
    }
})

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post with that id found' });
                return;
            }

            const post = dbPostData.get({ plain: true })
            res.render('updatePost', { post, loggedIn: true })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router