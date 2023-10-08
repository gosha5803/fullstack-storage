const {Router} = require('express')
const UserController = require('../controllers/UserController')
const router = new Router

router.post('/register', UserController.register)


module.exports = router