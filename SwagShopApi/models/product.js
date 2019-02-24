var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
    title: String,
    price: Number,
    likes:{type: Number, default: 0}
    
});

module.export = mongoose.model('Product', product);