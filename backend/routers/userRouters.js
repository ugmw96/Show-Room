const router =require('express').Router();
const user = require('../controllers/userController')

//add user
router.post('/newUser',user.addUser);
//find user by id
router.get('/user/:id', user.findUser);
//delete user by id
router.delete('/user/:id', user.deleteUser);
//update user by id
router.put('/user/:id', user.updateUser);

module.exports = router;