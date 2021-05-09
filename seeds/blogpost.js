const { Blogpost } = require("../models");

const blogpostData = [
  {
    title: "testpost1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut ratione tenetur? Voluptatibus impedit architecto",
    userId: 1,
  },
  {
    title: "testpost2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut ratione tenetur? Voluptatibus impedit architecto",
    userId: 2,
  },
  {
    title: "testpost3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut ratione tenetur? Voluptatibus impedit architecto",
    userId: 3,
  },
];

const seedProducts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedProducts;
