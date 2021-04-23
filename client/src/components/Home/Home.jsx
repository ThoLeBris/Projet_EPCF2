import React from 'react';
import Apropos from './Apropos';
import Header from './Header';
import Produits from './Produits';
import Commander from './Commander';
import Contact from './Contact';
import Footer from './Footer';

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
