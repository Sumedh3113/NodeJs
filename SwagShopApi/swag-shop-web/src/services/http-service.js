import 'whatwg-fetch';


class HttpService {
    //1
    getProducts = ()=>{
        //2
        var promise = new Promise((resolve,reject)=>{
        //4
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