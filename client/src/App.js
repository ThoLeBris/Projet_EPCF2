import './App.css';
import'./mediaqueries.css';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Produits from './components/Produits';


function App() {
    return (
        <div className="App">
            <Header/>
            <Apropos/>
            <Produits/>
        </div>
    );
}

export default App;
