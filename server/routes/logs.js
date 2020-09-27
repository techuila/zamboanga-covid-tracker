const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send(
      await models.sequelize.query(
        `SELECT DATE(date_created) AS date_created, COUNT(DATE(date_created)) AS cases, new_status AS status  FROM covid_patient_logs GROUP BY new_status, DATE(date_created) ORDER BY date_created`,
        { type: models.sequelize.QueryTypes.SELECT }
      )
    );
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

module.exports = router;
