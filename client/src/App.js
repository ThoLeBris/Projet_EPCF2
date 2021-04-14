import './App.css';
import'./mediaqueries.css';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Produits from './components/Produits';
import Commander from './components/Commander';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
    return (
        <div className="App">
            <Header/>
            <Apropos/>
            <Produits/>
            <Commander/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
