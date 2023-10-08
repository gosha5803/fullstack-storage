const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/router')
require('dotenv').config()
const PORT = process.env.PORT || 5555

app.use(express.json())
app.use('/api', router)

const start = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        })
        app.listen(PORT, () => {
            console.log(`Server's been started at ${PORT} port...`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()