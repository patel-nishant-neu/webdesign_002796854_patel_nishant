const userService = require('../service/userService');

async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        const user = await userService.authenticateUser(email, password);
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}

module.exports = {
    loginUser
};
