import axios from 'axios';
import emailjs from 'emailjs-com';
import {Component} from 'react'
import Choice from './Choice2';

export default class Formulaire extends Component {
    constructor(props){
        super(props);

        this.onChangeOrderName = this.onChangeOrderName.bind(this);
        this.onChangeOrderPhone = this.onChangeOrderPhone.bind(this);
        this.onChangeOrderAddress = this.onChangeOrderAddress.bind(this);
        this.onChangeOrderEmail = this.onChangeOrderEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            orderName: '',
            orderPhone: '',
            orderAddress: '',
            orderEmail: ''
        }
    }

    onChangeOrderName(e){
        this.setState({
            orderName: e.target.value
        });
    }
    onChangeOrderPhone(e){
        this.setState({
            orderPhone: e.target.value
        });
    }
    onChangeOrderAddress(e){
        this.setState({
            orderAddress: e.target.value
        });
    }
    onChangeOrderEmail(e){
        this.setState({
            orderEmail: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        console.log(`Commande envoyée`);
        console.log(`orderName: ${this.state.orderName}`);
        console.log(`orderPhone: ${this.state.orderPhone}`);
        console.log(`orderAddress: ${this.state.orderAddress}`);
        console.log(`orderEmail: ${this.state.orderEmail}`);

        const newOrder ={
            orderName: this.state.orderName,
            orderPhone: this.state.orderPhone,
            orderAddress: this.state.orderAddress,
            orderEmail: this.state.orderEmail
        }

        axios.post('http://localhost:8000/api/order/createOrder', newOrder)
            .then(res => console.log(res.data));

        this.setState({
            orderName: '',
            orderPhone: '',
            orderAddress: '',
            orderEmail: ''
        });

        emailjs.sendForm('service_1agx8xg', 'template_32d6wr7', e.target, 'user_PtyYegG9jAOYu02DGPaDt')
        .then((result) => {
            alert('Merci d\'avoir commander, nous vous rappelons dès que possible afin de valider avec vous votre commande.')
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset(); 
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmit}  id="form-commande">
                <div className="form-container largeur">
                    <h3>Vos informations</h3>
                    <div className="gras">Tous les champs sont obligatoires afin que l'on puisse vous contacter.</div>

                    <div className="form-item">
                        <label htmlFor="orderName">Nom: </label>
                        <input  type="text"
                                placeholder="Nom Complet"
                                name="orderName"
                                id="orderName"
                                value={this.state.orderName}
                                onChange={this.onChangeOrderName}
                                required
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="orderEmail">Adresse email: </label>
                        <input  type="email"
                                name="orderEmail"
                                id="orderEmail"
                                placeholder="exemple@exemple.com"
                                required
                                value={this.state.orderEmail}
                                onChange={this.onChangeOrderEmail}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="orderPhone">Numéro de téléphone: </label>
                        <input  type="tel"
                                name="orderPhone"
                                id="orderPhone"
                                placeholder="01 02 03 04 05"
                                minLength="10"
                                required
                                value={this.state.orderPhone}
                                onChange={this.onChangeOrderPhone}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="orderAddress">Adresse complète: </label>
                        <textarea   name="orderAddress"
                                    id="orderAddress"
                                    className="long-text size"
                                    placeholder="1, rue Jean Dupont 33000 BORDEAUX"
                                    value={this.state.orderAddress}
                                    onChange={this.onChangeOrderAddress}
                                    rows="3"
                                    required
                        ></textarea>
                    </div>
                    
                    <div className="line-container"><div className="line"></div></div>
                    
                    <h3>Votre commande</h3>
                        <p className="gras">Laisser vide les champs inutilisés.</p>

                    
                        <Choice/>

                    {/*//TODO : pouvoir en ajouter au click du btn-add, maximum 3 de plus, pouvoir supprimer 1 ligne avec btn-supp */}

                    <div className="gras margin">Réglement à la livraison.</div>
                </div>
                <div className="submit-container">
                    <input  type="submit"
                            value="Envoyer la commande"
                            className="btn-envoyer"
                            id="envoyer"
                    />
                </div>
            </form>
        )
    }
}
