import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import'./mediaqueries.css';
import Home from './components/pages/Home';
import Login from './components/Administration/Login';
import Administration from './components/pages/Administration';
import Register from './components/Administration/Register';
import { useMemo, useState, useEffect } from 'react'
import { AdminContext } from './AdminContext';
import { ProductContext } from './ProductContext';




function App() {
    
    const [admin,setAdmin] = useState(null);
    const [product,setProduct] = useState(null);

    const value = useMemo(() => ({admin,setAdmin}), [admin,setAdmin]);
    const valueProd = useMemo(()=>({product,setProduct}), [product,setProduct]);
    

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

    useEffect(()=>{
        ( 
            async ()=> {
                const response = await fetch('http://localhost:8000/api/product/getProduct', 
                {
                    headers: {'Content-Type':'application/json'},
                    credentials:'include'
                })

                const content = await response.json();
                
                if(content._id){
                    setProduct(content);
                }
            }
        )()
    }, [setProduct]);

    return (
        <div className="App">
            <BrowserRouter>
                <AdminContext.Provider value={value}>
                    <ProductContext.Provider value={valueProd}>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/administration" component={Administration}/>
                        </Switch>
                    </ProductContext.Provider>
                </AdminContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
