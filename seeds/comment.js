const {Comment} = require('../models')

const commentData = [
    {
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut ratione tenetur?",
        userId:1,
        blogpostId:1,
    },
    {
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut ratione tenetur?",
        userId:2,
        blogpostId:2,
    },
    {
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut ratione tenetur?",
        userId:3,
        blogpostId:3,
    }
];

const seedProducts = () => Comment.bulkCreate(commentData);

module.exports = seedProducts;