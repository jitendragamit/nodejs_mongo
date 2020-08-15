const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    category_name: { type: String, required: true, unique: true },
    parent_category_id: { type: String, required: false, unique: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);
