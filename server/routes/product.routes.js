const router = require('express').Router();

const Product = require('../models/product.model');

//? Créer un produit
// router.post('/createProduct', async (req,res)=>{
//     const product = new Product({
//         productName: req.body.productName,
//         productStock: req.body.productStock,
//         productDescription: req.body.productDescription,
//         productPrice: req.body.productPrice,
//     })

//     const result = await product.save();
    
// })


//? Lire un produit
router.get('/', async (req,res)=>{
    try{
        const product = await Product.find(
            {_id},
            {productName},
            {productStock},
            {productDescription},
            {productPrice}
        )
        res.send(product);

    }catch (error){
        return res.status(401).send({
            message: 'Product not found'
        })
    }
})
//? Modifier un produit
//? Supprimer un produit