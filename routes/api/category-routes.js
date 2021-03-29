const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Product } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryInfo = await Category.findAll({
      include: [
        {
          model: Product,
          // attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    // 200 status code means the request is successful
    res.status(200).json(categoryInfo);
  } catch (err) {
    // 500 status code means the server encountered an unexpected
    //  condition that prevented it from fulfilling the request.
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryInfoById = await Category.findByPk(req.params.id, {
      // attributes: ['id', 'category_name'],
      include: [
        {
          model: Product,
          // attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ],
    })

    if (!categoryInfoById) {
      res.status(404).json({ message: `No category with the Id: ${req.params.id}` })
      return;
    }

    res.status(200).json(categoryInfoById);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryToBeUpdated = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryToBeUpdated) {
      res.status(404).json({ message: `The category with Id: ${req.params.id} not found` })
      return;
    }
    res.status(200).json(categoryToBeUpdated);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryToBeRemoved = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryToBeRemoved) {
      res.status(404).json({ message: `No category found with Id: ${req.params.id} to be deleted.` })
      return;
    };
    res.status(200).json(categoryToBeRemoved);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
