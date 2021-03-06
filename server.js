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
   var ingredient = req.body.id; 
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
           var varfound = false;
        for (var x=0; x<ingredients.length; x++)
        {
            var ing = ingredients[x];
         
            if(ing.id == req.params.ingredientId){
                ingredients[x].text = newText;
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

app.delete('/:ingredientId', function(req,res){
   
    var varfound2 = false; 
    for (var x=0; x<ingredients.length; x++)
        {
            var ing = ingredients[x];
         
            if(ing.id == req.params.ingredientId){
                // we can use delete ingredints[x] 
                //but it will put null inside our array 
                // that's why use .pop()
                
                ingredients.pop();
                varfound2 = true;
                break;
            }
        }
    if(!varfound2){
        res.send("ID not found");
    }
    else{
        res.send(ingredients);
    }
    
     
    
    
    
});

app.listen(522,function(){
    console.log("API Listening on Port 522");
    
});