const router = require("express").Router();
const { Blogpost, Comment, User } = require("../../models");
const withAuth = require("../../utlis/auth");

//this is the api route /dashboards

router.get("/", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model:User,
          attributes:['name']
        },
        {
          model:Comment,
          attributes:['content',"createdAt"],
          include:[
            {
              model:User, 
              attributes:['name']
            },            
          ]
        },
      ]
    });

    const blogPost = blogPostData.get({ plain: true });
    console.log(blogPost)
    res.render("dashboard", {
      blogposts:blogPost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//   try {
//     const newBlogPost = await User.findByPK(req.params.id, {
//       include: [{ model: Comment }, { model: User }],
//     });
//     res.status(200).json(
//      { newBlogPost,
//       logged_in: req.session.logged_in})
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router

