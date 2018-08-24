const express = require('express');
// const protectedRoutes = require('./ProtectRoute');

const router = express.Router();

// router.use(protectedRoutes);

/** GET / - Check service health */
router.get('/api', (req, res) => res.send('OK'));

// router.use('/api/facilities', facilityRoutes);

module.exports = router;
//# sourceMappingURL=index.js.map
