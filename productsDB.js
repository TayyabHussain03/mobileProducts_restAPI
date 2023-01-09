require('dotenv').config()
const connectDB = require('./db/conn')
const productJSON = require('./product.json')
const Product = require('./models/productSchema')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany()
        await Product.create(productJSON)
    } catch (error) {
        console.log(error)
    }
}
start()