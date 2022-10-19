const router = require('express').Router();
const productsControllers = require('../controllers/productsController')

router.post('/new', productsControllers.addProduct);

router.get('/product/:id', productsControllers.getProductByID);

router.get('/all', productsControllers.allProducts);

router.delete('/product/:id', productsControllers.deleteProduct);

module.exports = router;