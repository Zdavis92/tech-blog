const { User } = require('../models');

const userdata = [
    {
        username: 'fiddlerlove',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
    },
    {
        username: 'janieguzman',
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        username: 'hollyjackson',
        email: 'cstoneman2@last.fm',
        password: 'password123'
    },
    {
        username: 'stormy',
        email: 'ihellier3@goo.ne.jp',
        password: 'password123'
    },
    {
        username: 'justchillin',
        email: 'gmidgley4@weather.com',
        password: 'password123'
    }
];

const seedUsers = () => {
    User.bulkCreate(userdata, { individualHooks: true });
    console.log('Users seeded!');
};

module.exports = seedUsers;