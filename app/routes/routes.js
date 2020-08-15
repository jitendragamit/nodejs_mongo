module.exports = (app) => {
    const categories = require('../controllers/category.controller.js');
	const products = require('../controllers/product.controller.js');

    // Create a new category
    app.post('/category', categories.create);

    // Retrieve all categories
    app.get('/categories', categories.findAll);
	
	// Retrieve all categories
    app.get('/categories_all', categories.findAllCategory);
	
	
	// Create a new product
    app.post('/product', products.create);
	
	// Retrieve all product
    app.get('/product', products.findAll);
	
	// Retrieve Products with Category
    app.get('/product/:category_id', products.findAll);
	
	 // Update a Product with productId
    app.put('/product/:product_id', products.update);
	
}
