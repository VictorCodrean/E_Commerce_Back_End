const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const categoryArr = await Category.findAll({
      include: [
        {
          model: Product
        }
      ]
    });
    // 200 status code means the request is successful
    res.json(categoryArr);
  } catch (err) {
    // 500 status code means the server encountered an unexpected
    //  condition that prevented it from fulfilling the request.
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
