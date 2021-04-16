import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const Register = () => {

    const [adminName,setAdminName] = useState("");
    const [adminEmail,setAdminEmail] = useState("");
    const [password,setPassword] = useState("");

    const [redirect,setRedirect] = useState(false);

    const submit = async (e)=>{
        e.preventDefault();

        await fetch('http://localhost:8000/api/admin/register', 
            {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    adminName,
                    adminEmail,
                    password
                })
            }
        )
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to='/login'/>;
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="">Please register</h1>

                    <input type="text" className="" id="username-input" placeholder="User Name"
                        required
                        value={adminName}
                        onChange={e=> setAdminName(e.target.value)}
                    />

                    <input type="text" className="" id="email-input" placeholder="email@example.com"
                        required
                        value={adminEmail}
                        onChange={e=> setAdminEmail(e.target.value)}
                    />

                    <input type="password" className="" id="password-input" placeholder="Password"
                        required
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
                    

                <button className="" type="submit">S'enregistrer</button>
                <div>
                    Mot de passe: au moins 
                    <ul>
                        <li>1 minuscule</li>
                        <li>1 MAJUSCULE</li>
                        <li>1 caractère spécial</li>
                        <li>8 caractères</li>
                    </ul>
                </div>
            </form>
            <div>Déjà un compte ? <Link to="/login">S'identifier</Link>.</div>
        </div>
    )
}

export default Register
