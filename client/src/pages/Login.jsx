import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AdminContext } from '../AdminContext'

const Login = ()=> {
    
    const {admin, setAdmin} = useContext(AdminContext)
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [redirect,setRedirect] = useState(false);

    const submit = async (e)=>{
        e.preventDefault();

        await fetch('http://localhost:8000/api/admin/login', 
            {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    email,
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

    if(admin){
        return <Redirect to='/'/>;
    }
    if(redirect){
        return <Redirect to='/user'/>;
    }

    return (
        <form onSubmit={submit}>
                <h1 className="">Administration</h1>
                <h2>Veuillez vous identifier</h2>

                    <input type="text" className="form-control form-floating" id="email-input" placeholder="email@example.com"
                        required
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />

                    <input type="password" className="" id="password-input" placeholder="Password"
                        required
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />

                <button className="" type="submit">Sign in</button>
            </form>
    )
}

export default Login;
