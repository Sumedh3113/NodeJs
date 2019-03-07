import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Components
import Product from '../products/product';
import WishList from '../wishlist/wishlist';
//import ProductCondensed from '../product-condensed/product-condensed';


//Services
import HttpService from '../services/http-service.js';



const http = new HttpService();

class App extends Component {

    constructor(props){
        super(props);
        
        this.state = {products: []};
        
        this.loadData = this.loadData.bind(this);
        
        
        
        this.loadData();
        this.productList = this.productList.bind(this);
    }
    
    loadData = ()=>{
        var self = this;
        
        http.getProducts().then(data => {
            //console.log(data);
            self.setState({products: data});
            
        }, err =>{
//            console.log(err);
        });
        
    }
    
    productList = () =>{
        // data from products array will be mapped 
        //how the data flow working with product={product}
        // {product} is from map function and product attribute will work //as a promise in product.js file
        const list = this.state.products.map((product) =>
            <div className="col-sm-4" key={product._id}>       
<Product product={product} />
                            </div>
                                      
                                       );
        return (list);
    }
    
    // new tag code added here
    render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            
            <h2>Welcome to Online Shop </h2>
        <div className="container-fluid App-main">
           <div className="row">
               <div className="col-sm-8">
                   <div className="row">
                    {this.productList()}    
                   </div>
               
               </div>
               <div className="col-sm-4">
               <WishList />
               </div>
               
            </div>
            </div>
        
        </header>
      </div>
    );
  }
}

export default App;
