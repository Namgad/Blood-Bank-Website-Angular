const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    bloodGroup: {type: String, required: true},
    bloodReg: {type: String, required: true},
    contact: {type: String, required: true},
    address: {type: String, required:true}
});

module.exports = mongoose.model('List', postSchema);
