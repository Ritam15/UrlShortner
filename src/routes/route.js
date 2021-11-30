const express = require('express');
const urlController = require('../controllers/urlController')
const router = express.Router();


router.post('/api/shorteningURL',urlController.postLongURL)
router.get('/api/url/:code',urlController.shorteningURL)



module.exports = router;