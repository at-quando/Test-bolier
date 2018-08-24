// Import dependencies
const express = require('express');
const router = express.Router();
const UserCtrl = require('../controller/UserController');

/* GET all users. */
router.get('/', UserCtrl.index);

/* Create a user. */
router.post('/', UserCtrl.create);

module.exports = router;
//# sourceMappingURL=UserRoute.js.map
