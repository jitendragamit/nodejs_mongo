const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    
	product_name: { type: String, required: true, unique: true },
	product_price: { type: Number, required: false, unique: false },
    category_id: { type: String, required: false, unique: false },
	description: { type: String}
	
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);



