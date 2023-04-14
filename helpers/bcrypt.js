const bcrypt = require('bcryptjs')

function hashPassword(userPassword){
    console.log(userPassword, "<< user password")
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(userPassword,salt)
    return hash
}

function comparePassword(userPassword,hashPassword){
    return bcrypt.compareSync(userPassword,hashPassword)
}

module.exports={hashPassword,
                comparePassword
                }