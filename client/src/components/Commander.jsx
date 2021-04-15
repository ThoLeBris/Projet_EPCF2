import React from 'react'
// import choice from './choice';

    
// let btnEnvoyer = document.getElementById('envoyer');
// let divValidation = document.getElementById('validated');

// function divValidated() {
//     if(getComputedStyle(document.getElementById('validated')).style.display === "none"){
//         divValidation.style.display = "flex";
//     }else{
//         divValidation.style.display = "none";
//     }
// }
//     btnEnvoyer.onclick = divValidated();
// const btnAddProduct = document.getElementById("form">"div">"add-pruduct");
//     function addProduct() {
//         createElement(choice);
//     }
//     btnAddProduct.onclick = addProduct();
    

const Commander = () => {


    return (
        <div id="commander">
            <h2>Passer commande</h2>

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

                    <div className="form-item choice">
                        <label htmlFor="produit">Produit: </label>
                        <select name="produit" id="produit" className="liste-produits" 
                        required>

                            <option hidden select >Choisissez</option>
                            <option value="rouge10L">Cubi de Rouge 10L</option>
                            <option value="rouge5L">Cubi de Rouge 5L</option>
                            <option value="clairet5L">Cubi de Clairet 5L</option>
                            <option value="caisseMethode">Caisse de Méthode</option>

                        </select>

                        <label htmlFor="produits-quantity">Quantité: </label>
                        <input type="number" name="produits-quantity" id="produits-quantity"
                            className="input-field number"
                            required
                            value="1"
                            min="1"
                            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
                    </div>
                    {/* //{choice}
                    {choice}
                    {choice} */}
                    <div className="add-product" id="add-product" >
                        {/* onClick=addProduct() */}
                        Ajouter un produit
                    </div>
                    <div className="gras margin">Réglement à la livraison.</div>
                </div>
                <div className="submit-container">
                    <input type="submit" value="Envoyer la commande" className="btn-envoyer"
                    id="envoyer"/>
                </div>
            </form>
            
            {/* //TODO : faire apparaitre à la validation */}
            <div className="validate" id="validated">
                <p>Votre commande a bien été enregistrée.</p>
                <p>Merci de votre commande, nous allons vous contacter dès que possible afin de la valider avec vous.</p>
            </div>
        </div>
    )
}

export default Commander
