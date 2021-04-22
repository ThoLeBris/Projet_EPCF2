import React from 'react';
import Apropos from '../components/Apropos';
import Header from '../components/Header';
import Produits from '../components/Produits';
import Commander from '../components/Commander';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div id="home">
            <Header/>
            <Apropos/>
            <Produits/>
            <Commander/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
