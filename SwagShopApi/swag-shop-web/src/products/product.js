import React, {Component} from 'react';
import './product.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';


let ds =new DataService();
let ns = new NotificationService();

class Product extends Component{
    
    
    constructor(props){
        super(props);
        
        // calling function itemOnWishList() and it should return true which it is not
        this.state = {onWishList: ds.itemOnWishList()}; 
        // error in here this is not returning any value
        
        this.onButtonClicked = this.onButtonClicked.bind(this);
        
//        this.onWishListChanged2 = this.onWishListChanged2.bind(this);
        
        
    }
    
    // for clearing the memory commented code is not working try to debug when free
//    componentDidMount() {
//        ns.addObserver(NOTIF_WISHLIST_CHANGED,this,this.onWishListChanged2);
//    }
    componentWillUnmount() {
        ns.removeObserever(this,NOTIF_WISHLIST_CHANGED);
    }

//    onWishListChanged2(newWishList) {
//        this.setState({wishList: ds.itemOnWishList(this.props.product)});
//        
//    }
       
    
    onButtonClicked = () =>{
        if (this.state.onWishList) {
        ds.removeFromWishList(this.props.product);
        }
        else{
        ds.addToWishList(this.props.product);
            }
    }
    

    render(){
        var btnClass;
        
        if(this.state.onWishList){
            btnClass = "btn btn-danger";
        }
        else{
            btnClass ="btn btn-primary";
        }
        return(
        <div className="card product">
            <img  className="card-img-top" alt= "product" src={this.props.product.imgUrl}></img>
                <div className="card-block">
                <h4 className="card-title">{this.props.product.title}</h4>
                    <p className="card-text">Price: ${this.props.product.price}</p>
                    <a href="#" className={btnClass} onClick={() => this.onButtonClicked()} >{this.state.onWishList ? "Remove From WishList" : "Add to cart"}</a>
                    
                </div>
            </div>
        );
        
        
    }
    
}

export default Product;
