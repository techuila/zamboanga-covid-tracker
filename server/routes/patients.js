const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send(
      await models.Patient.findAll({ order: [['date_created', 'DESC']] })
    );
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const data = await models.upsert(
      models.Content,
      { id, ...req.body },
      null,
      async (values) => {
        await models.upsert(models.Log, { patient_id: id, ...values });
      }
    );

    res.send(data);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

module.exports = router;
