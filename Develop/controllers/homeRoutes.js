const router = require("express").Router();
const { Blogpost, User, Comment } = require("../models");
const withAuth = require("../utlis/auth");

// the user on the home page is going to brought to the home page which will have the log in

router.get("/", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
      // order: [["created_at"]],
    });

    const blogPosts = blogPostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render("homepage", {
      blogposts: blogPosts,
      logged_in: req.session.logged_in, //we had to give the array a name for the template to be able to read it
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/blogpost/:id", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["content", "createdAt"],
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
      ],
    });

    const blogPost = blogPostData.get({ plain: true });

    res.render("blogpost", {
      blogposts: blogPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const blogPostData = await Blogpost.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
      // order: [["created_at"]],
    });

    const blogPosts = blogPostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render("dashboard", {
      blogposts: blogPosts,
      logged_in: req.session.logged_in, //we had to give the array a name for the template to be able to read it
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    console.log("you are logged in");
    return;
  }

  res.render("login");
});
router.get("/new-post",withAuth, async (req, res) => {
  try {
    res.render("new-post", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit-post/:id",withAuth, async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id);
    const blogPost = blogPostData.get({ plain: true });

    res.render("edit-post", {
      blogposts: blogPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/delete-post/:id",withAuth, async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id);
    const blogPost = blogPostData.get({ plain: true });

    res.render("delete-post", {
      blogposts: blogPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/comment/:id",withAuth, async (req, res) => {
  try {
    res.render("comment", {
      // blogposts: blogPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
