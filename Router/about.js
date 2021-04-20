const express=require('express');
const router= express.Router();
const db= require('../model/db')

//Get back all the post
router.get('/',async(req,res)=>{
    try{
        const about= await db.find();
        res.json(about)
    }catch(err){
        res.json({message:err});
    }
})

//Submit a post
router.post('/',async(req,res)=>{
    const database= new db({
        title: req.body.title,
        description: req.body.description
    })
try{
    const savedDb= await database.save()
    res.json(savedDb);
}
catch(err){
    res.json({err:message})
}
})

//specific post finding
router.get('/:nameId',async(req,res)=>{
    try{
    const file= await db.findById(req.params.nameId)
    res.json(file)
    }catch(err){
        res.json({message:err})
    }
})

//Delete a post by Id
router.delete('/:nameId',async(req,res)=>{
    try{
        const removedFile= await db.remove({_id:req.params.nameId})
        res.json(removedFile)
    }catch(err){
        res.json({message:err})
    }
})

//Update a post by Id
router.patch('/:nameId',async(req,res)=>{
    try{
    const updatedFile= await db.updateOne({_id:req.params.nameId},{$set:{title:req.body.title}})
    res.json(updatedFile)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router;