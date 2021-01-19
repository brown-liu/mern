const {json}=require('express');
const router = require('express').Router();
let Exercise=require('../models/exercise.model');

router.route('/').get((req,res)=>
{
Exercise.find()
.then(exercise=>res.json(exercise))
.catch(err=>res.status(400).json("Error: "+err));
});


router.route("/add").post((req,res)=>
{
const username =res.body.username;
const description=res.body.description;
const duration =Number(res.body.duration);
const date=Date.parse(req.body.date);

const newExercise =new Exercise({
username,
description,
duration,
date,
});

newExercise.save()
.then(res=>res.status(200).json("exercise added successful"))
.catch(err=>res.status(400).json("Error: "+err));


});

module.exports=router;