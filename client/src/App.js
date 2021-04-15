import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import'./mediaqueries.css';
import Login from './pages/Login';
import Administration from './pages/Administration';
import Home from './pages/Home';
import { useMemo, useState, useEffect } from 'react'
import { AdminContext } from './AdminContext';


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
                    setUser(content);
                }
            }
        )()
    }, []);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AdminContext.Provider value={value}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/administration" component={Administration}/>
                    </Switch>
                </AdminContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
