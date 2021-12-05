const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
try{
  const users = await User.bulkCreate(userData, {
    individualHooks: true
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true
  });

  process.exit(0);

}
  catch (error) {
    console.error(error);
  }
}

seedDatabase();
