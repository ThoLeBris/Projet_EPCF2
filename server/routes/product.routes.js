const router = require('express').Router();

const Product = require('../models/product.model');

//? Créer un produit
router.post('/createProduct', async (req,res)=>{
    const product = new Product({
        productName: req.body.productName,
        productStock: req.body.productStock,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
    })

    const result = await product.save();
    
})


//? Lire un produit
//? Modifier un produit
//? Supprimer un produit