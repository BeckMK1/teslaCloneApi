const express = require('express');
const router = express.Router()
const Model = require('../models/products');
const SlideModel = require("../models/slides");
module.exports = router
// Products routes
//POST
router.post('/post', async (req, res) => {
    const data = new Model({
        porduct: req.body,

    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
// GET
router.get('/getAll', async (req, res) =>{
 try{
    const data = await Model.find()
    res.json(data)
 } catch(error){
    res.status(500).json({message: error.message})
 }
})
// Get by ID
router.get('/getOne', async (req, res) =>{
   try{
        const data = await Model.find(product => {
            return product.filterValues.includes(req.query.parm1)
        });
        res.json(data)
   }
   catch(error){
    res.status(500).json({message: error.message})
   }
})
// Update by ID
router.patch('/upadateProduct/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})
// Delete by ID
router.delete('/deleteProduct/:id', async (req, res)=>{
  try{
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`document with ${data.name} has been deleted..`)
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
})
// Slides routes
// POST
router.post('/postSlides', async (req, res) => {
    const data = new SlideModel({
        slides: req.body,
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
// GET ALL
router.get('/getAllSlides', async (req, res) =>{
    try{
       const data = await SlideModel.find()
       res.json(data)
    } catch(error){
       res.status(500).json({message: error.message})
    }
   })
// Update by ID
router.patch('/upadateSlide/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await SlideModel.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})
// Delete by ID
router.delete('/deleteSlide/:id', async (req, res)=>{
    try{
      const id = req.params.id;
      const data = await SlideModel.findByIdAndDelete(id)
      res.send(`document with ${data.name} has been deleted..`)
    }
    catch(error){
      res.status(400).json({message:error.message})
    }
  })