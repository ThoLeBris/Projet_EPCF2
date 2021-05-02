const router = require('express').Router();

const Order = require('../models/order.model');

//? Créer une commande
router.post('/createOrder', async (req,res)=>{
    delete req.body._id;
    const order = new Order({...req.body});
    order.save()
        .then(()=> res.status(201).json({message: "Commande créée"}))
        .catch(error => res.status(400).json({ error }));
})

//? Lire TOUTES les commandes
router.get('/getOrder', async (req,res)=>{
    Order.find()
    .then(order => res.status(200).json(order))
    .catch(error => res.status(401).json({ error }));
})

//? Lire UNE commande
router.get('/getOrder/:id', async (req,res)=>{
    Order.findOne({ _id: req.params.id })
    .then(order => res.status(200).json(order))
    .catch(error => res.status(404).json({ error }));
})

//? Modifier une commande
router.put('/editOrder/:id', async (req,res)=>{
    Order.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Commande modifiée'}))
    .catch(error => res.status(404).json({ error }));
})

//? Supprimer une commande
router.delete('/deleteOrder/:id', async (req,res)=>{
    Order.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Commande supprimée'}))
    .catch(error => res.status(404).json({ error }));
})

module.exports = router;