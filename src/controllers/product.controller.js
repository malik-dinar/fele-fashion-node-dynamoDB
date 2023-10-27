const crypto = require("crypto");
const { fetchCategories, newProduct, getCategoryProduct } = require('../service/product.service');

const getCategories = async(req,res)=>{
    try{
        const categories = await fetchCategories()  
        res.json(categories)
    }
    catch(err){
        res.status(500).send('Error occured while fetching categories')
    }
}

const addProduct = async(req,res)=>{
    try{
        const product = req.body
        product.productId = crypto.randomUUID()
        const result = await newProduct(product)
        res.json({message : result})
    }catch(err){
        res.status(500).send('Error occured while adding product')  
    }
}

const getProduct = async(req,res)=>{
    try{
        const categoryId = req.query.categoryId;
        const products = await getCategoryProduct(categoryId)
        res.json(products)
    }catch(err){
        res.status(500).send('Error occured while fetching product')  
    }
}

module.exports = {
    getCategories,
    addProduct,
    getProduct
}