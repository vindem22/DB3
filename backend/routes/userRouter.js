const Router = require("express");
const router = new Router();
const userController = require('../controllers/userContoller');
const authMiddleware = require('../middleware/AuthMiddleware');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/registration', userController.registration);
router.post('/login', userController.auth);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;