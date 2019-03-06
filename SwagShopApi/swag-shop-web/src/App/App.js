import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Services
import HttpService from '../services/http-service.js';

//Components
import Product from '../products/product';
import wishList from '../wishlist/wishlist';
import ProductCondensed from '../product-condensed/product-condensed';


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
        
        const list = this.state.products.map((product) =>
            <div className="col-sm-4" key={product._id}>       
<Product title={product.title} price={product.price} imgUrl={product.imgUrl} />
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
               {this.productList()}
               </div>
               <div className="col-sm-4">
               
               <wishList />
               </div>
               
            </div>
            </div>
        
        </header>
      </div>
    );
  }
}

export default App;
