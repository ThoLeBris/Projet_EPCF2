import React from 'react'
import Choice from './Choice';


const form = () => {

    return (
        <form method="post" id="form-commande">
            <div className="form-container largeur">
                <div className="gras">Tous les champs sont obligatoires.</div>

                <div className="form-item">
                    <label htmlFor="fullName">Nom: </label>
                    <input type="text" name="fullName" id="fullName"
                        className="input-field"
                        placeholder="Nom Complet"
                        required/>
                </div>
                <div className="form-item">
                    <label htmlFor="email">Adresse email: </label>
                    <input type="email" name="email" id="email"
                        className="input-field"
                        placeholder="exemple@exemple.com"
                        required/>
                </div>
                <div className="form-item">
                    <label htmlFor="phone">Numéro de téléphone: </label>
                    <input type="text" name="phone" id="phone"
                        className="input-field"
                        placeholder="01 02 03 04 05"
                        required/>
                </div>
                <div className="form-item">
                    <label htmlFor="adresse">Adresse complète: </label>
                    <input type="text" name="adresse" id="adresse"
                        className="input-field"
                        placeholder="1, rue Jean Dupont"
                        required/>
                </div>
                
                <div className="line-container"><div className="line"></div></div>

                <Choice/>
                {/* //TODO : pouvoir en ajouter au click du btn-add, maximum 3 de plus, pouvoir supprimer 1 ligne avec btn-supp */}
                <div className="add-product" id="add-product" >
                    {/* onClick=addProduct() */}
                    Ajouter un produit
                </div>
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
