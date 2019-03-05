import 'whatwg-fetch';


class HttpService {
    
    getProducts = ()=>{
        var promise = new Promise((resolve,reject)=>{
        
            fetch('http://localhost:3004/product').then(res=>{
            //resolve(res.json());
            reject('Fuck You');
        })
    
            
        });
        return promise;
                
    }
    
}

export default HttpService;