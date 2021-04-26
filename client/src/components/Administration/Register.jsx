import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AdminContext } from '../../AdminContext';

const Register = () => {

    const [adminName,setAdminName] = useState("");
    const [adminEmail,setAdminEmail] = useState("");
    const [password,setPassword] = useState("");

    const [redirect,setRedirect] = useState(false);

    const {admin} = useContext(AdminContext);

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
        return <Redirect to='/administration'/>;
    }
    // TODO: ajouter control de saisie email et mdp, + l'ajouter sur formulaire commande 
    // const emailRegex = new RegExp('/^[a-zA-Z0-9.!#$%&*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/g');
    // const passwordRegex = new RegExp('/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[.!#$%&*+/=?^_{|}~-])[0-9a-zA-Z.!#$%&*+/=?^_{|}~-]{8,}$/')

    
    let page;

    if(admin){
        page =  (
            <>
                <form onSubmit={submit} className=" flex-center">
                    <h2>Enregistrer un nouvel administrateur</h2>

                    <input type="text" className="input-field" id="username-input" placeholder="Nom d'utilisateur"
                        required
                        value={adminName}
                        onChange={e=> setAdminName(e.target.value)}
                    />

                    <input type="text" id="email-input" placeholder="email@example.com"
                        required
                        value={adminEmail}
                        // validations={{matchRegExp:emailRegex}}
                        onChange={e=> setAdminEmail(e.target.value)}
                    />

                    <input type="password" id="password-input" placeholder="Mot de passe"
                        required
                        value={password}
                        // validations={{matchRegExp:passwordRegex}}
                        onChange={e=> setPassword(e.target.value)}
                    />

                    <div className="flex-center">
                        Le mot de passe contient au moins:
                        <ul>
                            <li>1 minuscule</li>
                            <li>1 MAJUSCULE</li>
                            <li>1 caractère spécial</li>
                            <li>8 caractères</li>
                        </ul>
                    </div>
                    <div className="flex-center">
                        <button className="btn-connect margin" type="submit">S'enregistrer</button>
                    </div>
                </form>
                <Link to="/administration" className="btn-connect">Retourner à l'administration</Link>
            </>
        )
    }else{
        page = (
            <Link to="/" className="btn-connect">Veuillez retourner sur le site</Link>
        )
    }

    return (
        
        <div id="register" className="flex-center">
                {page}
        </div>
    )
}

export default Register
