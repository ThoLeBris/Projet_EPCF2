import emailjs from 'emailjs-com'
import React from 'react'
import Choice from './Choice';
import Validate from './Validate';


const form = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1agx8xg', 'template_32d6wr7', e.target, 'user_PtyYegG9jAOYu02DGPaDt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset(); // pour reset les champs du formulaire, pas tout à fait ce qu'on veut
        return(
            <Validate/>
        )
    }

    return (
        //  method="post" 
        <form onSubmit={sendEmail} id="form-commande">
            <div className="form-container largeur">
                <div className="gras">Tous les champs sont obligatoires afin que l'on puisse vous contacter.</div>

                <div className="form-item">
                    <label htmlFor="orderName">Nom: </label>
                    <input type="text" name="orderName" id="orderName"
                        placeholder="Nom Complet"
                        required/>
                </div>
                <div className="form-item">
                    <label htmlFor="orderEmail">Adresse email: </label>
                    <input type="email" name="orderEmail" id="orderEmail"
                        placeholder="exemple@exemple.com"
                        required/>
                </div>
                <div className="form-item">
                    <label htmlFor="orderPhone">Numéro de téléphone: </label>
                    <input type="text" name="orderPhone" id="orderPhone"
                        placeholder="01 02 03 04 05"
                        required/>
                </div>
                <div className="form-item">
                    <label htmlFor="orderAddress">Adresse complète: </label>
                    <input type="text" name="orderAddress" id="orderAddress"
                        placeholder="1, rue Jean Dupont 33000 BORDEAUX"
                        required/>
                </div>
                
                <div className="line-container"><div className="line"></div></div>

                <Choice/>

                {/* //TODO : pouvoir en ajouter au click du btn-add, maximum 3 de plus, pouvoir supprimer 1 ligne avec btn-supp */}
                {/* <div className="add-product" id="add-product" >
                    {/* onClick=addProduct() *
                    Ajouter un produit
                </div> */}
                <div className="gras margin">Réglement à la livraison.</div>
            </div>
            <div className="submit-container">
                <input type="submit" value="Envoyer la commande" className="btn-envoyer"
                id="envoyer"
                />
            </div>
        </form>
    )
}

export default form
