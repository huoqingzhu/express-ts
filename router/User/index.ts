const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.json([{username:'admin', password:'123456'}])
})
router.post('/login', (req, res) => {
  const token ="UserPox"
  
  res.json({token})
})
export default  router;