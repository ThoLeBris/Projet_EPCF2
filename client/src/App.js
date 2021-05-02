import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import'./mediaqueries.css';
import Home from './components/pages/Home';
import Login from './components/Administration/Login';
import Administration from './components/pages/Administration';
import Register from './components/Administration/Register';
import EditProduct from './components/Administration/Product/editProduct'
import EditOrder from './components/Administration/Order/editOrder'
import { useMemo, useState, useEffect } from 'react'
import { AdminContext } from './AdminContext';

function App() {
    
    const [admin,setAdmin] = useState(null);

    const value = useMemo(() => ({admin,setAdmin}), [admin,setAdmin]);

    useEffect(()=>{
        ( 
            async ()=> {
                const response = await fetch('http://localhost:8000/api/admin/', 
                {
                    headers: {'Content-Type':'application/json'},
                    credentials:'include'
                })

                const content = await response.json();
                
                if(content._id){
                    setAdmin(content);
                }
            }
        )()
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <AdminContext.Provider value={value}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/administration" component={Administration}/>
                        <Route path="/editProduct/:id" component={EditProduct}/>
                        <Route path="/editOrder/:id" component={EditOrder}/>
                    </Switch>
                </AdminContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
