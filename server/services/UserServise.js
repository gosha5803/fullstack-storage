const User = require("../Models/UserModel");
const bcrypt = require('bcrypt')

class UserService {
    async register(email, password) {
        const candidate = await User.findOne({email})
        console.log(candidate)
        if(candidate) {
            throw new Error('Пользователь с таким email уже существует')
        }

        const hashedPassword = await bcrypt.hash(password, 4)
        const user = await User.create({email, password: hashedPassword})

        return user
    }
}

module.exports = new UserService()