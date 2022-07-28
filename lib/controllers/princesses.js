const { Router } = require('express');
const Princess = require('../models/Princess');
const router = Router();

router 
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const princess = await Princess.getById(req.params.id);
    console.log(princess);
    res.json(princess);
  })
  .get('/', async (req, res) => {
    const princesses = await Princess.getAll();
    const ids = princesses.map((princess) => ({ id: princess.id, name: princess.name }));
    res.json(ids);
  });

module.exports = router;
