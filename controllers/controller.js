const Product = require('../models/productSchema')

const getProduct = async (req, res) => {
    const { company, name, feature, sort, select } = req.query

    // for searching in params or filteration
    const queryObject = {}

    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }
    if (feature) {
        queryObject.feature = feature
    }
    let apiData = Product.find(queryObject)
    if (sort) {
        let sortFix = sort.split(',').join(' ')
        apiData = apiData.sort(sortFix)
    }
    if (select) {
        let selectFix = select.split(',').join(' ')
        apiData = apiData.select(selectFix)
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 10
    let skip = (page - 1) * limit

    apiData = apiData.skip(skip).limit(limit)
    const myData = await apiData
    res.status(200).json({ myData })
}

const getProductTesting = async (req, res) => {
    res.status(200).json({ msg: "I am getProductTesting" })
}

module.exports = { getProduct, getProductTesting }