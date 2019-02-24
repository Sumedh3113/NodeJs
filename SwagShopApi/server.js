var express = require('express');

var app = express();

var bodyP = require('body-parser');

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/swag-shop');

var Product = require('./models/product');/*product is product.js .js is not required here*/
var WishList = require('./models/wishlist');



app.use(bodyP.json());
app.use(bodyP.urlencoded({extended: false}));


app.listen(3000,function(){
    console.log("Swag shop API Listening on Port 3000");
    
});

app.post('/product',function(req,res){
   var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.save(function(err, savedProduct){
        if(err){
            res.status(500).send({error:"Could not save the data"});
        }
        else{
            res.send(savedProduct);
        }
        
    });
    
    
});

app.get("/product",function(req,res){
    Product.find({},function(err, productss){
        if(err){
            res.status(500).send("Not able to fectch data");
            
        }
        else{
            res.send(productss);
        }
        
    })
    

    
});


//var ingredients = [
//    {"id":"342",
//    "text": "Hello"
//    },
//    {
//        "id":"355",
//        "text":"One more"
//    },
//    {
//        "id":"346",
//        "text":"ggg"
//    }
//    
//];
//
//app.get('/',function(req,res){
//        res.send(ingredients);
//    
//});
//
//app.post('/',function(req,res){
//   var ingredient = req.body.id; 
//    if(!ingredient || ingredient.text === ""){
//        res.status(500).send({error: "Your ingredient must have text"});
//        
//    }
//    else{
//        ingredients.push(ingredient);
//        res.status(200).send(ingredients);
//        
//    }
//    
//});
//
//app.put('/:ingredientId', function(req,res){
//    
//    var newText = req.body.text;
//    
//    if(!newText || newText ===''){
//        res.send({error:"Text should not be empty"});
//    }
//    else{
//           var varfound = false;
//        for (var x=0; x<ingredients.length; x++)
//        {
//            var ing = ingredients[x];
//         
//            if(ing.id == req.params.ingredientId){
//                ingredients[x].text = newText;
//                varfound = true;
//                break;
//            }
//        }
//        
//        if(!varfound){
//            res.send("Variable not found");
//        }else{
//            res.send(ingredients);
//        }
//    }
//    
//});
//
//app.delete('/:ingredientId', function(req,res){
//   
//    var varfound2 = false; 
//    for (var x=0; x<ingredients.length; x++)
//        {
//            var ing = ingredients[x];
//         
//            if(ing.id == req.params.ingredientId){
//                // we can use delete ingredints[x] 
//                //but it will put null inside our array 
//                // that's why use .pop()
//                
//                ingredients.pop();
//                varfound2 = true;
//                break;
//            }
//        }
//    if(!varfound2){
//        res.send("ID not found");
//    }
//    else{
//        res.send(ingredients);
//    }
//    
//     
//    
//    
//    
//});

