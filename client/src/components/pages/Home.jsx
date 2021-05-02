import React from 'react';
import Apropos from '../Home/Apropos';
import Header from '../Home/Header';
import Produits from '../Home/Produits';
import ProduitsV2 from '../Home/ProduitsV2';
import Commander from '../Home/Commander';
import Contact from '../Home/Contact';
import Footer from '../Home/Footer';

const Home = () => {
    return (
        <div id="home">
            <Header/>
            <Apropos/>
            <Produits/>
            <ProduitsV2/>
            <Commander/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
