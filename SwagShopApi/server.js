var express = require('express');
// for avoiding cross platform error
var cors = require('cors');

var app = express();


// Then use it before your routes are set up:
app.use(cors());


var bodyP = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');


var Product = require('./models/product');/*product is product.js .js is not required here*/
var WishList = require('./models/wishlist');

/*//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});
*/



app.use(bodyP.json());
app.use(bodyP.urlencoded({extended: false}));


app.listen(3004,function(){
    console.log("Swag shop API Listening on Port 3004");
    
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


