const User = require('../model/UserModel');

const UserController = {
    addUser: async function (req, res) {
        try {
            const userData = req.body;
            const user = await User.create(userData);
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
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
        } catch (error) {
            console.error(error);
            res.status(500).json(
                {
                    error: 'Something Went Wrong!'
                }
            );
        }
    },

    userCount:async function(req,res){
        try{
            const userCount = User.countDocuments({});
            console.log(userCount);
        }catch (error) {
            console.error(error);
            res.status(500).json(
                {
                    error: 'Something Went Wrong!'
                }
            );
        }
    }
}

module.exports = UserController
