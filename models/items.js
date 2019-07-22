const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true        
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true        
    },
    c_password: {
        type: String,
        required: true        
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model("item", ItemSchema);