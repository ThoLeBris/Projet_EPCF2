import React from 'react';
import Formulaire from './Commander/Formulaire';
import Validate from './Commander/Validate';


const Commander = () => {

    return (
        <div id="commander">
            <h2>Passer commande</h2>
            
                <Formulaire/>
                <Validate/>
                {/* //TODO : a la validation du formulaire, afficher la validation (masquer le formulaire ?)*/}
        </div>
    )
}

export default Commander
