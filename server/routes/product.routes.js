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
        const product = await Product.find(productId)
        res.send(product);

    }catch (error){
        return res.status(401).send({
            message: 'Product not found'
        })
    }
})
//? Modifier un produit
//? Swith Stock [En Stock / Rupture]
// router.post('/switchStock', async (req,res)=>{
    // if(productStock == true){
    //     productStock == false;
    // }else{
    //     productStock == true;
    // }
// })


module.exports = router;