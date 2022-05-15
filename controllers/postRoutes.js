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
        res.json(posts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post with that id found' });
            return;
        }

        const post = dbPostData.get({ plain: true })
        res.json(post)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        user_id: req.body.user_id,
        body: req.body.body
    })
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;