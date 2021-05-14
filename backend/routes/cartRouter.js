const Router = require("express");
const router = new Router();
const CartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/AuthMiddleware');

router.post('/',authMiddleware, CartController.getCartProducts);
router.post('/add', authMiddleware, CartController.create);
router.post('/remove', authMiddleware, CartController.getCartProducts);

module.exports = router;