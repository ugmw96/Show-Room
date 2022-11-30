const User = require('../modules/User')
const bcrypt = require('bcrypt');

//Add new user
exports.addUser = async(req,res) => {

  //checking existing user email
  const existingUser = await User.findOne({email: req.body.email});
  if(existingUser){
      return res.status(400).json('Existing Email Address')
  };

  //password hashing
  const salt = await bcrypt.genSalt(5);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    userRole: req.body.userRole
  });
  try {
    await newUser.save();
    res.send({user:newUser.id});
  } catch (err) {
    console.log(err);
  }
}

//find user by id
exports.findUser = async(req, res) => {
  try {
      const user = await User.findOne({_id:req.params.id});
      res.send(user);
  } catch(error) {
      console.log(error);
  }
}

//delete user by id
exports.deleteUser = async (req,res) => {
  try {
    await User.findByIdAndDelete({_id:req.params.id});
    res.send({user:req.param.id}).status(200);
  } catch (error) {
    console.log(error.message).status(404);
  }
}

//update user by id
exports.updateUser = async (req,res) => {
  // res.send({user:req.params.id});
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    userRole: req.body.userRole
  });

  try {
    await User.updateOne({_id:req.params.id}, newUser)
    // res.send({user:req.body.name}).status(200);
    
  } catch (error) {
    console.log(error.message)
  }
    }