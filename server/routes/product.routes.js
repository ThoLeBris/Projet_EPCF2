const router = require('express').Router();

const Product = require('../models/product.model');

//? Créer un produit
router.post('/createProduct', async (req,res)=>{

    delete req.body._id;
    const product = new Product({...req.body});
    product.save()
        .then(()=> res.status(201).json({message: "Produit créer"}))
        .catch(error => res.status(400).json({ error }));
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
router.put('/modifyProduct/:id', async (req,res)=>{
    Product.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Produit modifié'}))
    .catch(error => res.status(404).json({ error }));
})

//? Swith Stock [En Stock / Rupture]
router.put('/toggleStock', async (req,res)=>{
    if(productStock === true){
        Product.find({ productStock: req.params.productStock })
        .then(product => res.status(200).json(product.productStock = false))
        .catch(error => res.status(404).json({ error }));
    }else{
        Product.find({ productStock: req.params.productStock })
        .then(product => res.status(200).json(product.productStock = true))
        .catch(error => res.status(404).json({ error }));
    }
})

//? Supprimer un produit
router.delete('/deleteProduct/:id', async (req,res)=>{
    Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Produit modifié'}))
    .catch(error => res.status(404).json({ error }));
})

module.exports = router;