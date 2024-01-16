const express = require('express');
const router = express.Router()
const Model = require('../models/products');
module.exports = router

//POST
router.post('/post', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        subTitle: req.body.subTitle,
        titleInfo: req.body.titleInfo,
        price: req.body.price,
        normalPrice: req.body.normalPrice,
        isDemo: req.body.isDemo,
        images: req.body.images,
        mainSpec1: req.body.mainSpec1,
        mainSpec2: req.body.mainSpec2,
        mainSpec3: req.body.mainSpec3,

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
router.get('/getOne/:id', async (req, res) =>{
   try{
        const data = await Model.findById(req.params.id);
        res.json(data)
   }
   catch(error){
    res.status(500).json({message: error.message})
   }
})
// Update by ID
router.patch('/upadate/:id', async (req, res)=>{
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
router.delete('/delete/:id', async (req, res)=>{
  try{
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`document with ${data.name} has been deleted..`)
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
})