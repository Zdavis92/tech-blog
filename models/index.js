const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'username'
});

User.hasMany(Comment, {
    foreignKey: 'username'
});

Post.belongsTo(User, {
    foreignKey: 'username'
});

Post.hasMany(Comment, {
    foreignKey: 'Post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'username'
});

Comment.belongsTo(Post, {
    foreignKey: 'Post_id'
});

module.exports = { User, Post, Comment };