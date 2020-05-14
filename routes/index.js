const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
// Do work here
router.get('/', catchErrors(storeController.GetStores));
router.post('/', catchErrors(storeController.createStore)); 

router.get('/stores', catchErrors(storeController.GetStores));


module.exports = router;
