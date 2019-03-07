//declaring global constant that can be accessed by anyone
export const NOTIF_WISHLIST_CHANGED ="notif_wishlist_changed";

let instance =null;
var observers = {};


class NotificationService {
   constructor() {
       if (!instance) {
        instance = this;
    }
    
    return instance;
  
       
   }
    
    postNotification = (notifName, data) =>{
        let obs = observers[notifName];
        for(var x=0; x<obs.length;x++){
            var obj = obs[x];
            obj.callBack(data);
            //data will be wishlist send from 
            //wishlist.js here we are letting every observer know //when there is a change
            
        }
        
    }
    
    
    removeObserver = (observer,  notifName) =>{
        
        var obs = observers[notifName];
        if(obs){
            for(var x=0; x<obs.length;x++){
                if(observer === obs[x].observer){
                    obs.splice(x,1);
                    //assigning new array to old one
                    observers[notifName]=obs;
                    break;
                    
                                                }
                                            }
            
                                }
                                            }
    
    addObserver = (notifName, observer, callBack) =>{
                 var obs = observers['notifName'];
                if(!obs){
                    // initialize an empty array and then we push //the notifName in an array
                 observers[notifName]=[];
                }
        let obj = {observer: observer, callBack: callBack};
        observers[notifName].push(obj);
    }
    
      
    
}

export default NotificationService;