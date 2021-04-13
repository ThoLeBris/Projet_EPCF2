import './App.css';
import'./mediaqueries.css';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Produits from './components/Produits';
import Commander from './components/Commander';


function App() {
    return (
        <div className="App">
            <Header/>
            <Apropos/>
            <Produits/>
            <Commander/>
        </div>
    );
}

export default App;
