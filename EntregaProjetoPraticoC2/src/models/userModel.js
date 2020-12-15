const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dt_createAt:{
        type: Date,
        required:true
    },
    dt_updated:{
        type: Date,
        required:true
    },
    dt_delete:{
        type: Date,
        required:true
    }

});

let user = module.exports  = mongoose.model('user', userSchema);

module.exports.get = (callback,limit) => {
    user.find(callback).limit(limit);
}