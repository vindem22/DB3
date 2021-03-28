const Router = require("express");
const router = new Router()
const userController = require('../controllers/userContoller')

router.post('/registration', userController.registration)
router.post('/login', userController.auth)
router.get('/auth', userController.check)

module.exports = router;