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

app.get('/wishlist', function(request, response) {
   WishList.find({}).populate({path:'products', model: 'Product'}).exec(function(err, wishLists) {
       if (err) {
           response.status(500).send({error:"Could not fetch wishlists"});
       } else {
           response.status(200).send(wishLists);
       }
   })
});

app.post('/wishlist', function(request, response) {
    var wishList = new WishList();
    wishList.title = request.body.title;

    wishList.save(function(err, newWishList) {
       if (err) {
           response.status(500).send({error: "Could not create wishlist"});
       } else {
           response.send(newWishList);
       }
    });
});

app.put('/wishlist/product/add', function(request, response) {
   Product.findOne({_id: request.body.productId}, function(err, product) {
       if (err) {
           response.status(500).send({error:"Could not add item to wishlist"});
       } else {
           WishList.update({_id:request.body.wishListId}, {$addToSet:{products: product._id}}, function(err, wishList) {
               if (err) {
                   response.status(500).send({error:"Could not add item to wishlist"});
               } else {
                   response.send("Successfully added to wishlist");
               }
           });
       }
   })
});


