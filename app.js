const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

const PORT = config.get('port') || 5000
const MONGOURI = config.get('mongoUri')

async function start() {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }

    app.listen(PORT, () => {
        console.log(`App has been started on port ${PORT}...`)
    })
}

start()
