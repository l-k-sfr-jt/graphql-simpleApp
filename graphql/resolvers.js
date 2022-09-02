const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = {
    createUser: async ({userInput}, req) => {
        const existingUser = await User.findOne({email: userInput.email});
        if (existingUser) {
            const err = new Error('User exists');
            throw err;
        }

        const hashedPass = await bcrypt.hash(userInput.password);
        const user = new User({
            email: userInput.email,
            name: userInput.name,
            password: hashedPass
        });
        const createdUser = await user.save();

        return {
            ...createdUser._doc, _id: createdUser._id.toString()
        }


    }
}