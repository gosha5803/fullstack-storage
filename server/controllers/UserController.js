const userService = require('../services/UserServise')

class UserController {
    async register(req, res, next){
        try {
            const {email, password} = req.body
            const userData = await userService.register(email, password)
            return res.json(userData)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController()