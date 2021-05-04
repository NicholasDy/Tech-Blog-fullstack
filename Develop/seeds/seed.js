const sequelize = require("../config/connection");

const userData = require("./userData");
const blogpostData = require("./blogpost");
const commentData = require("./comment");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  console.log('\n----- DATABASE SYNCED -----\n');
  await userData();

  console.log('\n----- USER SEEDED -----\n');

  await blogpostData();
  console.log('\n----- BLOGS SEEDED -----\n');

  await commentData();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
