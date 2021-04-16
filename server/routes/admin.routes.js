const router = require('express').Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const Admin = require('../models/admin.model');

//? Register
router.post('/register', async (req,res)=>{

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const admin = new Admin({
        adminName: req.body.adminName,
        adminEmail: req.body.adminEmail,
        password: hashedPassword,
    })

    const result = await admin.save();
    const {password, ...data} = await result.toJSON();

    res.send(data);
})

//? LogIn
router.post('/login', async (req,res)=>{

    const admin = await Admin.findOne({email:req.body.email});
    if(!admin){
        return res.status(404).send({
            message:'User not found'
        })
    }

    if (!await bcrypt.compare(req.body.password, admin.password)) {
        return res.status(404).send({
            message:'Invalide credentials'
        })
    }

    const token = jwt.sign({_id:admin._id}, "secret");

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000  // 1 day in ms
    })

    res.send({
        message:'Authentification success'
    });
})

//? La route / va servir de route qui récupère mes infos de l'utilisateur authentifié.
router.get('/', async (req,res)=>{
    try {
        
        const cookie = req.cookies['jwt']

        const claims = await jwt.verify(cookie, 'secret');
        if(!claims) {
            return res.status(401).send({
                message: 'Not authenticated'
            })
        }
        const admin = await Admin.findOne({_id:claims._id});
        const {password, ...data} = await admin.toJSON(); 

        res.send(data);

    } catch (error) {
        return res.status(401).send({
            message: 'Not authenticated'
        })
    }
})

//? LogOut
router.post('/logout', (req,res)=>{
    res.cookie('jwt', '', {maxAge:0});

    res.send({
        message:'Successfully logged out'
    })
})
module.exports = router;