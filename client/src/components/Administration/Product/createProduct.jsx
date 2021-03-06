import axios from 'axios';
import {Component} from 'react'

export default class CreateProduct extends Component {
    constructor(props){
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductStock = this.onChangeProductStock.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        // this.onChangeProductImage = this.onChangeProductImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            productStock: '',
            productDescription: '',
            productPrice: '',
            // productImage: ''
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
    // onChangeProductImage(e){
    //     this.setState({
    //         productImage: e.target.value
    //     });
    // }
    onSubmit(e){
        e.preventDefault();

        console.log(`Produit envoyé`);
        console.log(`productName: ${this.state.productName}`);
        console.log(`productStock: ${this.state.productStock}`);
        console.log(`productDescription: ${this.state.productDescription}`);
        console.log(`productPrice: ${this.state.productPrice}`);
        // console.log(`productImage: ${this.state.productImage}`);

        const newProduct ={
            productName: this.state.productName,
            productStock: this.state.productStock,
            productDescription: this.state.productDescription,
            productPrice: this.state.productPrice,
            // productImage: this.state.productImage
        }

        axios.post('http://localhost:8000/api/product/createProduct', newProduct)
            .then(res => console.log(res.data));

        this.setState({
            productName: '',
            productStock: '',
            productDescription: '',
            productPrice: '',
            // productImage: ''
        });
    }
    
    render(){
        return(
            <div className="flex-center">
                <div className="line-container"><div className="line"></div></div>

                <h3>Créer un Produit</h3>

                <form onSubmit={this.onSubmit} enctype="multipart/form-data">
                    <div className="center">
                        <label>Nom: </label>
                        <input  type="text"
                                className="input-width"
                                value={this.state.productName}
                                onChange={this.onChangeProductName}
                                required
                        />
                    </div>
                    <div className="center">
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
                    <div className="center">
                        <label>Description: </label>
                        <textarea   name="productDescription"
                                    id="productDescription"
                                    className="long-text input-width"
                                    value={this.state.productDescription}
                                    onChange={this.onChangeProductDescription}
                                    rows="3"
                                    required
                        >
                        </textarea>
                    </div>
                    <div className="center">
                        <label>Prix: </label>
                        <input  type="text"
                                className="input-width"
                                value={this.state.productPrice}
                                onChange={this.onChangeProductPrice}
                                required
                        />
                    </div>
                    
                    <div className="flex-center">
                        <button type="submit" className="btn-connect">Créer un Produit</button>
                    </div>
                </form>
            </div>
        )
    }
}
