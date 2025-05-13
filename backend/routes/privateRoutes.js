const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Rota protegida com JWT
router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: `Bem-vindo, usuário ID ${req.user.id}` });
});

module.exports = router;
