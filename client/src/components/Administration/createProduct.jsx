import axios from 'axios';
import {Component} from 'react'

export default class CreateProduct extends Component {
    constructor(props){
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductStock = this.onChangeProductStock.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            productStock: '',
            productDescription: '',
            productPrice: ''
        }
    }

    onChangeProductName(e){
        this.setState({
            productName: e.target.value
        });
    }
    onChangeProductStock(e){
        this.setState({
            productStock: e.target.value
        });
    }
    onChangeProductDescription(e){
        this.setState({
            productDescription: e.target.value
        });
    }
    onChangeProductPrice(e){
        this.setState({
            productPrice: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        console.log(`Prdt envoyé`);
        console.log(`productName: ${this.state.productName}`);
        console.log(`productStock: ${this.state.productStock}`);
        console.log(`productDescription: ${this.state.productDescription}`);
        console.log(`productPrice: ${this.state.productPrice}`);

        const newProduct ={
            productName: this.state.productName,
            productStock: this.state.productStock,
            productDescription: this.state.productDescription,
            productPrice: this.state.productPrice
        }

        axios.post('http://localhost:8000/api/product/createProduct', newProduct)
            .then(res => console.log(res.data));

        this.setState({
            productName: '',
            productStock: '',
            productDescription: '',
            productPrice: ''
        });
    }
    
    render(){
        return(
            <div style={{marginTop: 20}}>
                <h3>Create New Product</h3>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Nom: </label>
                        <input  type="text"
                                value={this.state.productName}
                                onChange={this.onChangeProductName}
                                required
                        />
                    </div>
                    <div>
                        <label>En Stock: </label>
                        <input  type="radio"
                                name="stock"
                                id="stockYes"
                                value="En Stock"
                                checked={this.state.productStock === "En Stock"}
                                onChange={this.onChangeProductStock}
                        />

                        <label>En rupture: </label>
                        <input  type="radio"
                                name="stock"
                                id="stockNo"
                                value="Rupture"
                                checked={this.state.productStock === "Rupture"}
                                onChange={this.onChangeProductStock}
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input  type="text"
                                value={this.state.productDescription}
                                onChange={this.onChangeProductDescription}
                                required
                        />
                    </div>
                    <div>
                        <label>Prix: </label>
                        <input  type="text"
                                value={this.state.productPrice}
                                onChange={this.onChangeProductPrice}
                                required
                        />
                    </div>
                    <div>
                        <input type="submit" value="Créer un Produit"/>
                    </div>
                </form>
            </div>
        )
    }
}
