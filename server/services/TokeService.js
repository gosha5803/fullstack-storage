const jwt = require('jsonwebtoken')

class TokenService {
    async generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {expiresIn:'15m'})
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {expiresIn:'30d'})

        //Создать модель токенов, а нельзя ли их хранить в модели пользователя, где хранить токены на бэкенде. сохранять модель токена и возвращать объект токенов.
    }
}