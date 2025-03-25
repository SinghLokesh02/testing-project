const express = require('express')
const router = express.Router()
const cardModel = require('../models/card');

router.get('/', async (req, res) => {
    const data = [
        {
            title: "Wireless Bluetooth Headphones",
            description: "High-quality headphones with noise-canceling feature",
            price: 129.99,
            quantity: 50,
            image: "https://example.com/images/wireless-bluetooth-headphones.jpg",
            createdAt: new Date()
        },
        {
            title: "Smart Watch",
            description: "Fitness tracker with heart rate monitor",
            price: 199.99,
            quantity: 30,
            image: "https://example.com/images/smart-watch.jpg",
            createdAt: new Date()
        },
        {
            title: "Gaming Mouse",
            description: "High-precision mouse with customizable RGB lighting",
            price: 79.99,
            quantity: 20,
            image: "https://example.com/images/gaming-mouse.jpg",
            createdAt: new Date()
        },
        {
            title: "Portable External SSD",
            description: "1TB SSD for fast data transfer",
            price: 179.99,
            quantity: 15,
            image: "https://example.com/images/portable-external-ssd.jpg",
            createdAt: new Date()
        },
        {
            title: "Wireless Keyboard",
            description: "Mechanical keyboard with backlit keys",
            price: 109.99,
            quantity: 25,
            image: "https://example.com/images/wireless-keyboard.jpg",
            createdAt: new Date()
        },
        {
            title: "4K Ultra HD Monitor",
            description: "27-inch monitor with HDR support",
            price: 399.99,
            quantity: 10,
            image: "https://example.com/images/4k-ultra-hd-monitor.jpg",
            createdAt: new Date()
        },
        {
            title: "Laptop Backpack",
            description: "Water-resistant backpack for laptops up to 15 inches",
            price: 49.99,
            quantity: 40,
            image: "https://example.com/images/laptop-backpack.jpg",
            createdAt: new Date()
        },
        {
            title: "Bluetooth Speaker",
            description: "Portable speaker with 20W output",
            price: 89.99,
            quantity: 35,
            image: "https://example.com/images/bluetooth-speaker.jpg",
            createdAt: new Date()
        },
        {
            title: "Wireless Charging Pad",
            description: "Qi-compatible charging pad for smartphones",
            price: 29.99,
            quantity: 50,
            image: "https://example.com/images/wireless-charging-pad.jpg",
            createdAt: new Date()
        },
        {
            title: "Fitness Tracker",
            description: "Activity tracker with GPS and heart rate monitor",
            price: 149.99,
            quantity: 20,
            image: "https://example.com/images/fitness-tracker.jpg",
            createdAt: new Date()
        }
    ]  
    try{
        await cardModel.deleteMany({})  // Clear existing data before inserting new ones
        await cardModel.insertMany(data)
        res.status(201).json({ message: 'Cards added successfully' })
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
})
router.get('/getcards', async(req, res) => {
    try{
        const cards = await cardModel.find({})
        res.json(cards)
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
})

module.exports = router