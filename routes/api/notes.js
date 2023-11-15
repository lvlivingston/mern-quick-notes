const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// CREATE /api/users/notes
router.post('/notes', notesCtrl.create)

module.exports = router;