const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

function isValidPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  return passwordRegex.test(password);
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
  return emailRegex.test(email);
}

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Invalid email. Please use a northeastern.edu email address.' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({ message: 'Invalid password. Password must have at least 8 characters, one uppercase, one lowercase, one alphanumeric character, and one number.' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ name, email, password: hashedPassword });

  try {
    newUser.save();
    res.send('User Registered successfully');
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const currentUser = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;

  try {
    await User.findOneAndDelete({ _id: userid });
    res.send("User Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;

router.put('/update', async (req, res) => {
  const { email, name, password, isAdmin } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Invalid email. Please use a northeastern.edu email address.' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const updatedData = {
      name: name || user.name,
      password: password ? await bcrypt.hash(password, await bcrypt.genSalt(10)) : user.password,
      isAdmin: isAdmin || user.isAdmin,
    };

    if (password && !isValidPassword(password)) {
      return res.status(400).json({ message: 'Invalid password. Password must have at least 8 characters, one uppercase, one lowercase, one alphanumeric character, and one number.' });
    }

    const updatedUser = await User.findByIdAndUpdate(user._id, updatedData, {
      new: true,
    });

    res.json({
      message: 'User details updated successfully',
      user: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' });
  }
});