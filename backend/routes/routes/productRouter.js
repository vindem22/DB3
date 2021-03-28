const Router = require("express");
const router = new Router()
const ProductController = require("../controllers/productController")

router.post('/',ProductController.create)
router.get('/:id',ProductController.getProduct)
router.get('/',ProductController.getProducts)
router.delete('/:id',ProductController.delete)

module.exports = router;