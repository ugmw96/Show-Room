const router =require('express').Router();
const user = require('../controllers/userController')

router.post('/newUser',user.addUser);

module.exports = router;