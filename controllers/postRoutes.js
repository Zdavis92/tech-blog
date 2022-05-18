const router = require('express').Router();
const { User, Post, Comment } = require('../models');

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
        },
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
            },
            {
                model: Comment,
                attributes: ['comment_text', 'user_id', 'post_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post with that id found' });
                return;
            }

            const post = dbPostData.get({ plain: true })
            if (req.session.loggedIn) {
                res.render('blogPost', {post, loggedIn: true})
            } else {
                res.render('blogPost', {post, loggedIn: false})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        user_id: req.session.user_id,
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

router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title,
            body: req.body.body
        },
        {
            where: {
                id: req.params.id
            },
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post with that id found!' })
            }
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
})

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
})

module.exports = router;