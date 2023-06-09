const jwt = require('jsonwebtoken')
const SECRET_KEY = 'Rahasia'

function generateToken(payload){
    const token = jwt.sign(payload,SECRET_KEY)
    return token
}

function verifyToken(token){
    const decoded = jwt.verify(token,PRIVATE_KEY)
    return decoded
}

module.exports = generateToken,verifyToken