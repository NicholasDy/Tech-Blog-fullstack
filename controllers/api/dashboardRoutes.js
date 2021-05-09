const router = require("express").Router();
const { Blogpost, Comment } = require("../../models");
const withAuth = require("../../utlis/auth");

router.post("/new-post", withAuth, async (req, res) => {
  try {
    const postData = await Blogpost.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(postData);
    res.render("/dashboard", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Blogpost.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(postData);
    res.render("/dashboard", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Blogpost.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(postData);
    res.render("/dashboard", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/comment", withAuth, async (req, res) => {
  try {
    const postData = await Comment.create({
      content: req.body.comment,
      user_id: req.session.user_id,
      blogpost_id: req.body.id
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
