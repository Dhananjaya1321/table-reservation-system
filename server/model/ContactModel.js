let mongoose = require('mongoose');

const ContactModel = mongoose.Schema(
    {
        "name": {
            require: true,
            type: String
        },
        "phone": {
            require: true,
            type: String
        },
        "message": {
            require: true,
            type: String
        }
    }
)

let Contact = mongoose.Model('Contact', ContactModel);
module.exports = Contact