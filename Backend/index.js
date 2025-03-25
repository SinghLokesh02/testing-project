const express = require('express')
const app = express()

const connectDB = require("./config/db")

app.use(express.json()) // for parsing JSON request bodies

// Connect to MongoDB
connectDB()

const cardRouter = require('./routes/card')
const cartRouter = require('./routes/cart')



app.get('/', (req, res) => {
    res.send('Hello World from Lokesh!')
})

// Routing
app.use('/card', cardRouter)
app.use('/cart', cartRouter)


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})