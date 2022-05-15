const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');

const sequelize = require('../config/connections');

const seed = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    process.exit(0);
};

seed();