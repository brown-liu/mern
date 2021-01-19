const {json,err} =require("express");

const router =require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req,res)=>
{
User.find()   //mongoose method => find user
.then(users=>res.json(users)) 
.catch(err=>res.status(400).json('Error: '+err));   
});



router.route('/add').post((req,res)=>
{
const username=req.body.username;
const newUser=new User({username});
newUser.save()  // save to db
.then(()=>res.json('User added !'))
.catch(err=>res.status(400),json('Error: '+ err));
    
});

module.exports=router;