const { Router } = require('express');
const { verify } = require('../middlewares/auth.middleware');

const router = Router();


const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.get('/get-user', verify, authController.getUser);

module.exports = router;