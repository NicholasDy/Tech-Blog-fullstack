const router = require("express").Router();
const { Blogpost, Comment, User } = require("../../models");
const withAuth = require("../../utlis/auth");

//this is the api route /dashboards

router.get("/", async (req,res)=>{
  try{
    
    res.render("dashboard");
  }catch(err) {
    res.status(500).json(err);
  }
})


module.exports = router

