const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("./userModel");


//POST REQUEST
router.post("/create", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }

    if (!(fullName.match(/^([\w]{3,})+\s+([\w\s]{3,})+$/))) {
      return res
        .status(400).json({ msg: "Please, Enter correct full name" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 8 characters long" });
    }

    if (!(email.match(/(\W|^)[\w.+\-]*@northeastern\.edu(\W|$)/))) {
      return res
        .status(400).json({ msg: "Please end your northeastern email" });
    }

    // Checking database and running an email check to ensure no duplicate emails upon register 
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ msg: "This user already exists in the system" });
    }

    // using Bcrypt to hash passwords for security
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // creating out new user notice password value is passwordHash not password
    const newUser = new User({
      fullName: fullName,
      email: email,
      password: passwordHash,

    });
    const savedUser = await newUser.save();
    //res.json(savedUser);
    res.send("New user has been added to the system");

  }

  catch (error) {
    res.status(500).json({ err: error.message });
  }

});


//GET REQUEST
router.get('/getAll', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  }
  catch (error) {
    res.status(500).json({ err: error.message });
  }
});


//DELETE REQUEST
router.delete('/delete/:email', async (req, res) => {
  /*const {id} = req.params.id;
  User = User.filter((user) => user.id!=id);
  res.send(' deleted');*/
  const emailExists = await User.findOne({ email: req.params.email });
  // console.log(emailExists);
  if (emailExists) {
    User
      .findOneAndRemove(req.params.email)
      .exec()
      .then(doc => {
        if (!doc) { return res.status(404).end(); }
        // return res.status(204).end();
        return res.send("User with email " + req.params.email + " deleted");
      })
  }
  else {
    return res.send("User with email " + req.params.email + " does not exist");
  }


});


//PUT REQUEST
router.put('/edit/:email', async (req, res) => {
  try {
    let users = await User.findOneAndUpdate(req.params.email);
    if (req.body.fullName) users.fullName = req.body.fullName;

    if (req.body.password) {
      password = req.body.password;
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      users.password = passwordHash;
    }

    const u1 = await users.save();
    // res.json(u1);
    return res.send("User with email " + req.params.email + " updated");
  }
  catch (error) {
    res.status(500).json({ err: error.message });
  }

})

module.exports = router;