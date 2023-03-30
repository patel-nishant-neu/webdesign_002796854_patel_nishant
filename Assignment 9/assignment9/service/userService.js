const User = require('../scr/user');
const bcrypt = require('bcrypt');

async function authenticateUser(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    return user;
}

module.exports = {
    authenticateUser
};
