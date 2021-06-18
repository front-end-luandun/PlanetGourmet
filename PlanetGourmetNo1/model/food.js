var mongoose        = require('mongoose');

var foodSchema      = mongoose.Schema({
    imagePath: {
        type: String
    },
    foodName:{
        type: String
    },
    description: {
        type: String
    }
});
