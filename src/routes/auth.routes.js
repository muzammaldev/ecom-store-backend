const express = require('express');
const { signup, login } = require('../controllers/auth.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Example of a protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to your profile!', user: req.user });
});

module.exports = router;
