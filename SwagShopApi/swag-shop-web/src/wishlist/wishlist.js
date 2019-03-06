import React, {Component} from 'react';
import './wishlist.css';


class wishList extends Component{

    render(){
        return(
            <div className="card product">
            <div className="card-block">
                <h4 className="card-title">Wish List</h4>
                <ul className="list-group"></ul>
        </div>
            </div>
        
        );
        
        
    }
    
}

export default wishList;
