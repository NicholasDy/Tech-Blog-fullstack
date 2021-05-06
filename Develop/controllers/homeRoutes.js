const router = require("express").Router();
const { Blogpost, User } = require("../models");
const withAuth = require("../utlis/auth");

// the user on the home page is going to brought to the home page which will have the log in

router.get("/", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findAll({
      include:[
        {
          model: User,
          attributes: ["name"]
        }
      ],
      // order: [["created_at"]],
    });

    const blogPosts = blogPostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    console.log('here are the posts', blogPosts.length)

    res.render("homepage", { 
      blogPosts, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/blogpost/:id", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk({
      
    });

    const blogPosts = blogPostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render("homepage", { blogPosts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
module.exports = router;
