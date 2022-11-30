const User = require('../modules/User')

//Add new user
exports.addUser = async(req,res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    userRole: req.body.userRole
  });
  try {
    const user = await newUser.save();
    res.send({user:newUser.id});
  } catch (err) {
    console.log(err);
  }
}