const User = require('../model/UserModel');

const UserController = {
    addUser: async function (req, res) {
        try {
            const userData = req.body;
            const user = await User.create(userData);
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json(
                {
                    error: 'Something Went Wrong!'
                }
            );
        }
    },

    signin: async function (req, res) {
        try {
            const userEmail = req.body.email;
            const user = await User.find({email:userEmail});
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json(
                {
                    error: 'Something Went Wrong!'
                }
            );
        }
    }
}

module.exports = UserController
