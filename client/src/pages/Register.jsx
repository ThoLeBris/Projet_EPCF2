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
    // TODO: ajouter control de saisie email et mdp, + l'ajouter sur formulaire commande 
    // const emailRegex = new RegExp('/^[a-zA-Z0-9.!#$%&*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/g');
    // const passwordRegex = new RegExp('/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[.!#$%&*+/=?^_{|}~-])[0-9a-zA-Z.!#$%&*+/=?^_{|}~-]{8,}$/')

    return (
        <div className="flex-center">
            <form onSubmit={submit}>
                <h2 className="">Enregistrer un nouvel administrateur</h2>

                    <input type="text" className="" id="username-input" placeholder="User Name"
                        required
                        value={adminName}
                        onChange={e=> setAdminName(e.target.value)}
                    />

                    <input type="text" className="" id="email-input" placeholder="email@example.com"
                        required
                        value={adminEmail}
                        // validations={{matchRegExp:emailRegex}}
                        onChange={e=> setAdminEmail(e.target.value)}
                    />

                    <input type="password" className="" id="password-input" placeholder="Password"
                        required
                        value={password}
                        // validations={{matchRegExp:passwordRegex}}
                        onChange={e=> setPassword(e.target.value)}
                    />
                    

                <button className="" type="submit">S'enregistrer</button>
                <div>
                    Le mot de passe contient au moins:
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
