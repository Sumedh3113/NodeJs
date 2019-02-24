var express = require('express');

var app = express();

var bodyP = require('body-parser');

app.use(bodyP.json());
app.use(bodyP.urlencoded({extended: false}));

var ingredients = [
    {"id":"342",
    "text": "Hello"
    },
    {
        "id":"355",
        "text":"One more"
    },
    {
        "id":"346",
        "text":"ggg"
    }
    
];

app.get('/',function(req,res){
        res.send(ingredients);
    
});

app.post('/',function(req,res){
   var ingredient = req.body; 
    if(!ingredient || ingredient.text === ""){
        res.status(500).send({error: "Your ingredient must have text"});
        
    }
    else{
        ingredients.push(ingredient);
        res.status(200).send(ingredients);
        
    }
    
});

app.put('/:ingredientId', function(req,res){
    
    var newText = req.body.text;
    
    if(!newText || newText ===''){
        res.send({error:"Text should not be empty"});
    }
    else{
        for (var x=0; x<ingredients.length; x++)
        {
            var ing = ingredients[x];
            var varfound = false;
            if(ing.id == req.param.ingredientId){
                ing.text = newText;
                varfound = true;
                break;
            }
        }
        
        if(!varfound){
            res.send("Variable not found");
        }else{
            res.send(ingredients);
        }
    }
    
});

app.listen(2000,function(){
    console.log("API Listening on Port 2000");
    
});