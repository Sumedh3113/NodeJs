import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

let ds = new DataService();


class ProductCondensed extends Component{
    constructor(props){
        super(props);
        
        
        this.removeProduct = this.removeProduct.bind(this);
        
    }
    
    removeProduct = () => {
        
        ds.removeFromWishList(this.props.product);
    }
    
// this.pros.title is supplied from wishlist.js ProductCondensed //tag
    render(){
        return(
        <li className="list-group-item">
            <a className="btn btn-outline-danger" onClick = {() => this.removeProduct()}>X</a>
                {this.props.product.title} | <b>${this.props.product.price}</b>
            
            </li>
        );
        
        
    }
    
}

export default ProductCondensed;
