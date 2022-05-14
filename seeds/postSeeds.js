const { Post } = require('../models');

const postdata = [
    {
        title: "consectetur adipiscing elit",
        username: "fiddlerlove",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Metus aliquam eleifend mi in nulla. Consectetur libero id faucibus nisl. Gravida quis blandit turpis cursus"
    },
    {
        title: "sed do eiusmod tempor incididunt",
        username: "janieguzman",
        body: "Nec nam aliquam sem et tortor consequat. Eget nullam non nisi est sit amet facilisis magna. "
    },
    {
        title: "ut labore et dolore magna aliqua",
        username: "hollyjackson",
        body: "Quisque non tellus orci ac. Eget sit amet tellus cras adipiscing enim eu"
    },
    {
        title: "Neque ornare aenean euismod elementum",
        username: "hollyjackson",
        body: "Massa enim nec dui nunc mattis. Non quam lacus suspendisse faucibus interdum posuere lorem."
    },
    {
        title: "Imperdiet dui accumsan sit",
        username: "stormy",
        body: "Ante in nibh mauris cursus mattis molestie a iaculis. Netus et malesuada fames ac."
    },
    {
        title: "amet nulla facilisi morbi tempus iaculis",
        username: "stormy",
        body: "In nisl nisi scelerisque eu ultrices. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. "
    },
    {
        title: "Amet risus nullam eget felis",
        username: "stormy",
        body: "Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris"
    },
    {
        title: "Dignissim convallis aenean et tortor",
        username: "justchillin",
        body: "Odio morbi quis commodo odio. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."
    }
];

const seedPosts = () => {
    Post.bulkCreate(postdata);
    console.log('Post seeded!')
};

module.exports = seedPosts;