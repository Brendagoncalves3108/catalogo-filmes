const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

router.get('/', filmeController.getFilmes);
router.post('/', filmeController.addFilme);
router.put('/:id', filmeController.updateFilme);
router.delete('/:id', filmeController.deleteFilme);


router.delete('/', filmeController.deleteAllFilmes);


module.exports = router;
