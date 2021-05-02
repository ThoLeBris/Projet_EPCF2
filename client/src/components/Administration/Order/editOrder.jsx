import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class EditOrder extends Component {
    
    constructor(props){
        super(props)

        this.onChangeOrderName = this.onChangeOrderName.bind(this);
        this.onChangeOrderPhone = this.onChangeOrderPhone.bind(this);
        this.onChangeOrderAddress = this.onChangeOrderAddress.bind(this);
        this.onChangeOrderEmail = this.onChangeOrderEmail.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            orderName: '',
            orderPhone: '',
            orderAddress: '',
            orderEmail: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/order/getOrder/'+this.props.match.params.id)
        .then(response =>
            this.setState({
                orderName: response.data.orderName,
                orderPhone: response.data.orderPhone,
                orderAddress: response.data.orderAddress,
                orderEmail: response.data.orderEmail,
            })
        )
        .catch(error => console.error({ error }))
    }

    onChangeOrderName(e){
        this.setState({
            orderName: e.target.value
        })
    }
    onChangeOrderPhone(e){
        this.setState({
            orderPhone: e.target.value
        })
    }
    onChangeOrderEmail(e){
        this.setState({
            orderEmail: e.target.value
        })
    }
    onChangeOrderAddress(e){
        this.setState({
            orderAddress: e.target.value
        })
    }

    //? Modifie la commande & renvoi à la page d'administration
    onSubmit(e){
        e.preventDefault();
        const modifiedOrder = {
            orderName: this.state.orderName,
            orderPhone: this.state.orderPhone,
            orderEmail: this.state.orderEmail,
            orderAddress: this.state.orderAddress
        };

        axios.put('http://localhost:8000/api/order/editOrder/'+this.props.match.params.id, modifiedOrder)
        .then(res => console.log(res.data));

        this.props.history.push('/administration');
    }

    //? Supprime la commande & renvoi à la page d'administration
    onClick(e){
        e.preventDefault();

        axios.delete('http://localhost:8000/api/order/deleteOrder/'+this.props.match.params.id)
        .then(res => console.log(res.data));

        this.props.history.push('/administration');
    }
    
    render() {
        return (
            <div className="flex-center">
                <h3>Modifier un Client</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="center">
                        <label>Nom: </label>
                        <input  type="text"
                                className="input-width"
                                value={this.state.orderName}    
                                onChange={this.onChangeOrderName}
                                required
                        />
                    </div>
                    
                    <div className="center">
                        <label>Email: </label>
                        <input  type="email"
                                className="input-width"
                                value={this.state.orderEmail}
                                onChange={this.onChangeOrderEmail}
                                required
                        />
                    </div>
                    <div className="center">
                        <label>Téléphone: </label>
                        <input  type="tel"
                                className="input-width"
                                value={this.state.orderPhone}
                                onChange={this.onChangeOrderPhone}
                                required
                        />
                    </div>
                    <div className="center">
                        <label>Adresse: </label>
                        <textarea   className="input-width long-text"
                                    value={this.state.orderAddress}
                                    onChange={this.onChangeOrderAddress}
                                    required
                        ></textarea>
                    </div>
                    <div className="flex-center">
                        <button type="submit" className="btn margin">Modifier le Client</button>
                        
                        <button onClick={this.onClick} className="disconnect">Supprimer le Client</button>
                        
                        <Link to="/administration" className="btn margin">Retourner à l'administration</Link>
                    </div>
                </form>
            </div>
        )
    }
}
