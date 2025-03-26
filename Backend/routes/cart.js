const express = require('express')
const router = express.Router()
const cartModel = require("../models/cart");

router.get('/', (req, res) => {
    res.send('Hello World from cart!')
})

router.get("/getall", async(req, res) => {
    try{
        const cart = await cartModel.find();
        res.send(cart);
    }
    catch(err){
        res.status(500).send({message: err.message});
        console.error(err);
    }
})
router.post("/create", async(req, res) => {
    const data = req.body;
    console.log(req.body);
    try{
        const cart = new cartModel(data);
        await cart.save();
        res.send(cart);
    }
    catch(err){
        res.status(500).send({message: err.message});
        console.error(err);
    }
})

router.delete("/deletecards", async(req, res) => {
    try{
        await cartModel.deleteMany();
        res.send("All cards deleted");
    }
    catch(err){
        res.status(500).send({message: err.message});
        console.error(err);
    }
})
router.delete("/delete/:id", async(req, res) => {
    try{
        const cart = await cartModel.findByIdAndDelete(req.params.id);
        if(!cart){
            return res.status(404).send({message: "Card not found"});
        }
        res.send(cart);
    }
    catch(err){
        res.status(500).send({message: err.message});
        console.error(err);
    }
})

module.exports = router