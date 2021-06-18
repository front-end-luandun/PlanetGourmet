var mongoose        = require('mongoose');

var citySchema      = mongoose.Schema({
    imagePath: {
        type: String
    },
    cityName:{
        type: String
    },
    description: {
        type: String
    }
});
