const jwt = require('jsonwebtoken')
const { secret } = require('../infra/config')


/**
 * Generate Token
 * @param {object} obj plain object
 * @returns {string} JsonWebToken
 */
module.exports.gToken = (obj) => {
    return jwt.sign(obj, secret, { expiresIn: '10h', algorithm: 'HS256' })
}

module.exports.decryptToken = (token) => {
    return jwt.decode(token, { json: true })
}

module.exports.getSecret = () => {
    return secret
}