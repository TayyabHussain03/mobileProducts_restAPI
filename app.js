require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


const product = require('./routes/routes')
const connectDB = require('./db/conn')

app.get('/', (req, res) => {
    res.send('Tayyab Here')
})

//middleware

app.use('/api/product', product)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()