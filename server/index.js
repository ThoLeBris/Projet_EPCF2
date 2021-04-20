require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const adminRoutes = require('./routes/admin.routes');

//? Connect to DB
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, ()=>{
    console.log('connected to MongDB');
});

//? Instanciation of server and middlewares
const app = express();

app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:8000', 'http://localhost:8001', 'http://localhost:8080', 'http://localhost:3000', 'http://localhost:4200']
}))

app.use(express.json());

//? Routes
app.use('/api/admin', adminRoutes);

const Port = process.env.PORT;
app.listen(Port);