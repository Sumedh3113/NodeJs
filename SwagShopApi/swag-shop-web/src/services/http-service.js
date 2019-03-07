import 'whatwg-fetch';


class HttpService {
    //1
    getProducts = ()=>{
        //2
        var promise = new Promise((resolve,reject)=>{
        //4 take data from the server fetching from db is done at //server.js page
            fetch('http://localhost:3004/product').then(res=>{
            resolve(res.json());
            //reject('Error occured');
        })
    
            
        });
        // 3
        return promise;
                
    }
    
}

export default HttpService;