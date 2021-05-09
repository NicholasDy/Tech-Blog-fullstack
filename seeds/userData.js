const { User } = require("../models");

const userData = [
    {
    "name":"Nick",
    "email":"test1@test.com",
    "password":"password12345"
    },
    {
    "name":"josh",
    "email":"test2@test.com",
    "password":"password12345"
    },
    {
    "name":"Kaite",
    "email":"test3@test.com",
    "password":"password12345"
    }
]

const seedProducts = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedProducts;
