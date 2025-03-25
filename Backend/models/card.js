const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Akhilesh', cardSchema)