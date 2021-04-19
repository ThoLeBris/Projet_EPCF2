import React, { useState } from 'react';
import Formulaire from './Commander/Formulaire';
import Validate from './Commander/Validate';


const Commander = () => {

    const [submited] = useState(true)
    return (
        <div id="commander">
            <h2>Passer commande</h2>
            
                {submited ? <Formulaire/> : <Validate/>}
                
                {/* //TODO : a la validation du formulaire, afficher la validation (masquer le formulaire ?)*/}
        </div>
    )
}

export default Commander
