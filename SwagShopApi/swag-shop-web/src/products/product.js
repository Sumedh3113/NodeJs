import React, {Component} from 'react';
import './product.css';


class Product extends Component{

    render(){
        return(
        <div className="card product">
            <img  className="card-img-top" alt= "product" src={this.props.imgUrl}></img>
                <div className="card-block">
                <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                    
                </div>
            </div>
        );
        
        
    }
    
}

export default Product;
