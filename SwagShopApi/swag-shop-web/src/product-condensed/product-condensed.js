import React, {Component} from 'react';
import './product-condensed.css';


class ProductCondensed extends Component{

    render(){
        return(
        <li className="list group-item">
            <a className="btn btn-outline">{this.props.title}|${this.props.price}</a>        
            
            </li>
        );
        
        
    }
    
}

export default ProductCondensed;
