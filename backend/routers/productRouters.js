const router = require('express').Router();
const productsControllers = require('../controllers/productsController')

router.post('/new', productsControllers.addProduct);

router.get('/all', productsControllers.allProducts);

router.get('/:id', productsControllers.getProductByID);

router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;