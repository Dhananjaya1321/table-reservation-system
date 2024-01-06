let mongoose = require('mongoose');

const UserModel = mongoose.Schema(
    {
        "email": {
            require: true,
            type: String,
            unique: true,
            index: true
        },
        "password": {
            require: true,
            type: String
        },
        "role": {
            require: true,
            type: String
        }
    }
)

let User = mongoose.model('User', UserModel);
module.exports = User
