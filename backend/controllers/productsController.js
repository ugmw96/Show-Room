const { application } = require('express');
const Product = require('../modules/Product');

//add new product
exports.addProduct = async(req,res) => {
  console.log(req.body);
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  })

  try {
    await newProduct.save();
    res.send({item: newProduct.id});
  } catch (error) {
    console.log(error);
  }
}

//get all products
exports.allProducts = async(req, res) => {
  try {
    const allProducts = await Product.find();
    res.send(allProducts);
  } catch (error) {
    console.log(error);
  }
};

// get a product by ID
exports.getProductByID = async(req, res) => {
  try {
    const product = await Product.findById(req.params.id).exec();
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

//delete product
exports.deleteProduct = async(req, res) => {
  try {
    await Product.deleteOne(req.params);
    
  } catch (error) {
    console.log(error);
  }
};

