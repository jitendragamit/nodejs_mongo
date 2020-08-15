
const Product = require('../models/product.model.js');

/*
Author : Jitendra Gamit
Date : 15th Aug, 2020
Purpose : Create and Save a new category 
**/
exports.create = (req, res) => {
    
    if(!req.body.product_name) {
        return res.status(400).send({
            message: "product name can not be empty"
        });
    }
	
    const product = new Product({
        product_name: req.body.product_name,
		product_price: req.body.product_price,
	    category_id: req.body.category_id,
		description: req.body.description,
	});

    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });
}; // end create()

/*
Author : Jitendra Gamit
Date : 15th Aug, 2020
Purpose : Retrieve and return all products from the requested category using categoryId in the request 
**/
exports.findAll = (req, res) => {
  Product.find({ "category_id": req.params.category_id })
  .then(products => {
      if(!products.length) {
          return res.status(404).send({
              message: "Products not found mapped with category_id " + req.params.category_id
          });
      }
      res.send(products);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Product not found with categoryId " + req.params.category_id
          });
      }
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving products."
      });
  });
}; // EO findAll()


/*
Author : Jitendra Gamit
Date : 15th Aug, 2020
Purpose : Update a product identified by the product_id in the request 
**/
exports.update = (req, res) => {
  
  if(!req.body.product_name || !req.body.product_price) {
      return res.status(400).send({
          message: "Product name & price can not be empty"
      });
  }

  Product.findByIdAndUpdate(req.params.product_id, {
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      categories: req.body.categories,
      description: req.body.description
  }, {new: true})
  .then(product => {
      if(!product) {
          return res.status(404).send({
              message: "Product not found with id " + req.params.product_id
          });
      }
      res.send(product);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Product not found with id " + req.params.product_id
          });
      }
      return res.status(500).send({
          message: "Error updating Product with id " + req.params.product_id
      });
  });
}; // EO update()

