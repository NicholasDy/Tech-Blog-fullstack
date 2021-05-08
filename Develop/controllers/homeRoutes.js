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
      logged_in: req.session.logged_in  //we had to give the array a name for the template to be able to read it
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
    res.render("blogpost", {
      blogposts:blogPost,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req,res)=>{
  try{
    
    res.render("dashboard",{
    logged_in: req.session.logged_in});
  }catch(err) {
    res.status(500).json(err);
  }
})


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    console.log("you are logged in")
    return;
  }

  res.render('login');
});
module.exports = router;
