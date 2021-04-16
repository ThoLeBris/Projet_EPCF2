import React from 'react';
import Formulaire from './Commander/Formulaire';
import Validate from './Commander/Validate';


const Commander = () => {

    return (
        <div id="commander">
            <h2>Passer commande</h2>
            
                <Formulaire/>
                <Validate/>
        </div>
    )
}

export default Commander
