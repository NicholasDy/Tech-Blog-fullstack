const router = require("express").Router();
const { Blogpost, Comment, User } = require("../../models");
const withAuth = require("../../utlis/auth");

//this is the api route /dashboards

router.get("/", withAuth, async (req, res) => {
  try {
    const newBlogPost = await User.findByPK(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });
    res.status(200).json(
     { newBlogPost,
      logged_in: req.session.logged_in})
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router

