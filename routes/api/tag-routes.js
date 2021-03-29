const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagInfo = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products'
        }
      ]
    });
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagInfo = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products'
        }
      ]
    });
    if (!tagInfo) {
      res.status(404).json({ message: `No tag found with Id: ${req.params.id}` })
      return;
    }
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagToBeCreated = await Tag.create(req.body)
    res.status(200).json(tagToBeCreated);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagToBeUpdated = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!tagToBeUpdated) {
      res.status(404).json({ message: `Can not update the tag with Id: ${req.params.id} that wasn't found.` })
      return;
    };
    res.status(200).json(tagToBeUpdated);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagToBeRemoved = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagToBeRemoved) {
      res.status(404).json({ message: `Can't delete the tag with Id: ${req.params.id} that wasn't found.` })
      return;
    };
    res.status(200).json(tagToBeRemoved);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
