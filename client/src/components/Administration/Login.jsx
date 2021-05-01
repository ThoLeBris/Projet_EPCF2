import React, { useState, useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AdminContext } from '../../AdminContext'

const Login = ()=> {
    
    const {admin, setAdmin} = useContext(AdminContext)
    
    const [adminEmail,setAdminEmail] = useState("");
    const [password,setPassword] = useState("");
    const [redirect,setRedirect] = useState(false);
    
    const [didMount, setDidMount] = useState(false); 

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, [])

    if(!didMount) {
        return null;
    }

    const submit = async (e)=>{
        e.preventDefault();

        await fetch('http://localhost:8000/api/admin/login', 
            {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    adminEmail,
                    password
                })
            }
        )
        
        const response = await fetch('http://localhost:8000/api/admin/', 
                {
                    headers: {'Content-Type':'application/json'},
                    credentials:'include'
                })

        const content = await response.json();
                
        if(content._id){
            setAdmin(content);
        }
        setRedirect(true);
    }

    if(admin && redirect){
        return <Redirect to='/administration'/>;
    }

    return (
        
        <form onSubmit={submit} className="login-form flex-center">
            <h2>Administration</h2>
            <h3>Veuillez vous identifier</h3>

                <input type="text" id="email-input" placeholder="Email"
                    required
                    value={adminEmail}
                    onChange={e=> setAdminEmail(e.target.value)}
                />

                <input type="password" id="password-input" placeholder="Mot de passe"
                    required
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />

            <button className="btn-connect" type="submit">Se connecter</button>
            <button className="link-home"><Link to="/">Retourner sur le site</Link></button>
        </form>
        
    )
}

export default Login;
