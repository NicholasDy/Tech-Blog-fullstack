const router = require("express").Router();
const { Blogpost, Comment, User } = require("../../models");
const withAuth = require("../../utlis/auth");

//this is the api route /dashboards

router.get("/:id", withAuth, async (req, res) => {
  try {
    const newBlogPost = await Blogpost.findByPK(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });
    res.status(200).json(newBlogPost)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router
// this get post is going to also show the comments for each of the blogposts

// put requert to update the blog post

// delete request for the blogpost
