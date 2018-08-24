const express = require('express');
const userRoutes = require('./UserRoute');
// const protectedRoutes = require('./ProtectRoute');

const router = express.Router();

// router.use(protectedRoutes);

/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK man')
);

// router.use('/api/facilities', facilityRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
