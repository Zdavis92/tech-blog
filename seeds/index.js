const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');

const sequelize = require('../config/connections');

const seed = async () => {
    await sequelize.sync({ force: true });
    await seedPosts();
    await seedUsers();
    process.exit(0);
};

seed();