const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, 'price must be provided']
    },
    ratings: {
        type: Number,
        required: false,
        default: 4.9
    },
    feature: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['apple', 'samsung', 'tecno', 'infinix', 'samsung', 'mi', 'dell', 'hp','oppo','huawei','moto']
        }
    }
})

module.exports = mongoose.model('Product', productSchema)