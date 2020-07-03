import express  from 'express'
import config from 'config'
import path from 'path'
import mongoose from 'mongoose'
import { OptionsJson } from 'body-parser'

const app = express()

app.use(express.json(<OptionsJson>{ extended: true }))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000
const MONGOURI: string = config.get('mongoUri')

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
