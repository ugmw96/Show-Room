const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productRouter = require('./routers/productRouters')
require('dotenv').config()

//database configuration
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log(`Mongodb connected successfully`);
})

//Middleware
app.use(express.json());

//routers middlewares
app.use('/api/product', productRouter);

//server configuration
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`))