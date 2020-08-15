const Category = require('../models/category.model.js');

/*
Author : Jitendra Gamit
Date : 15th Aug, 2020
Purpose : Create and Save a new category
**/
exports.create = (req, res) => {
    // Validate request
    if(!req.body.category_name) {
        return res.status(400).send({
            message: "Category content can not be empty"
        });
    }

    const category = new Category({
		category_name: req.body.category_name,
		parent_category_id: req.body.parent_category_id || 0
	});

    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Category."
        });
    });
}; // EO create()


/*
Author : Jitendra Gamit
Date : 15th Aug, 2020
Purpose : Retrieve and return all categories from the database.
**/
exports.findAll = (req, res) => {
    Category.find()
    .then(categories => {
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
}; // EO findAll()


/*
Author : Jitendra Gamit
Date : 15th Aug, 2020
Purpose : Retrieve and return all categories with all its child categories mapped to it
**/
exports.findAllCategory = (req, res) => {
  Category.aggregate(
  [
   { "$addFields": { "parent_category_id": { "$toString": "$_id" }}},
    { "$lookup": {
      "from": "categories",
      "localField": "parent_category_id",
      "foreignField": "parent_category_id",
      "as": "child_categories"
    }}
  ]).then(categories => {
      res.send(categories);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving categories."
      });
  });
}; // EO findAllCategory()
