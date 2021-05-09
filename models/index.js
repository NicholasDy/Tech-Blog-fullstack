const User = require("./User");
const Blogpost = require("./Blogpost")
const Comment = require("./Comment")

// user has many comments
User.hasMany(Blogpost, {
    foreignKey: "user_id",
    onDelete:'SET NULL'
})

User.hasMany(Comment,{
    foreignKey:"user_id",
    onDelete:'SET NULL'
})

Blogpost.belongsTo(User,{
    foreignKey:"user_id",
})

Blogpost.hasMany(Comment, {
    foreignKey:"blogpost_id",
    onDelete: "CASCADE",
})

Comment.belongsTo(Blogpost,{
    foreignKey:"blogpost_id",
})
Comment.belongsTo(User,{
    foreignKey:"user_id",
    through: Blogpost,
})


module.exports = { User, Blogpost, Comment };
