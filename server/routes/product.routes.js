const router = require('express').Router();

const Product = require('../models/product.model');

//? Créer un produit
router.post('/createProduct', async (req,res)=>{

    const product = new Product({...req.body});
    product.save()
        .then(()=> res.status(201).json({message: "Produit enregistré"}))
        .catch(error => res.status(401).json({ error }));
})

//? Lire TOUT les produits
router.get('/getProduct', async (req,res)=>{
    
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(401).json({ error }));
})

//? Lire UN produit
router.get('/getProduct/:id', async (req,res)=>{
    Product.findOne({ _id: req.params.id })
    .then(product => res.status(200).json(product))
    .catch(error => res.status(404).json({ error }));
})

//? Modifier un produit
//? Swith Stock [En Stock / Rupture]
router.post('/toggleStock', async (req,res)=>{
    try{
        const product = await Product.find({productId : req.body.productId});
        if(this.product.productStock == true){
            this.product.productStock = false;
        }else{
            this.product.productStock = true;
        }
        product.save();
        res.send('ToggleStock OK');
    }catch (error){
        return res.status(401).send({
            message: 'ToggleStock not OK'
        })
    }
})


module.exports = router;