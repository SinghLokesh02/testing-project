const express = require('express')
const router = express.Router()
const cartModel = require("../models/cart");

router.get('/', (req, res) => {
    res.send('Hello World from cart!')
})

router.post("/create", async(req, res) => {
    const data = req.body;
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

module.exports = router