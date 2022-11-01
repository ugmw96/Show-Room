const router = require('express').Router();
const productsControllers = require('../controllers/productsController')

router.post('/new', productsControllers.addProduct);

// router.get('/:id', productsControllers.getProductByID);

router.get('/all', productsControllers.allProducts);

router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;