"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.json([{ username: 'admin', password: '123456' }]);
});
router.post('/login', (req, res) => {
    const token = "huoqingzu";
    res.json({ token });
});
exports.default = router;
