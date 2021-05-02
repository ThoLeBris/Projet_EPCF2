import axios from 'axios';
import {Component} from 'react'

export default class CreateOrder extends Component {
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

        console.log(`Commande modifiée`);
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
    }
    
    render(){
        return(
            <div className="flex-center">

                <h3>Créer un Client</h3>

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
                        <input  type="text"
                                className="input-width"
                                value={this.state.orderEmail}
                                onChange={this.onChangeOrderEmail}
                                required
                        />
                    </div>
                    <div className="center">
                        <label>Téléphone: </label>
                        <input  type="text"
                                className="input-width"
                                minLength="10"
                                value={this.state.orderPhone}
                                onChange={this.onChangeOrderPhone}
                                required
                        />
                    </div>
                    <div className="center">
                        <label>Adresse: </label>
                        <textarea   className="long-text input-width"
                                    value={this.state.orderAddress}
                                    onChange={this.onChangeOrderAddress}
                                    rows="3"
                                    required
                        >
                        </textarea>
                    </div>
                    
                    <div className="flex-center">
                        <button type="submit" className="btn-connect">Créer un Client</button>
                    </div>
                </form>
            </div>
        )
    }
}
