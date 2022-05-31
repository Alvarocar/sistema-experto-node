const jwt = require('jsonwebtoken')
const { secret } = require('../infra/config')


/**
 * Generate Token
 * @param {object} obj plain object
 * @returns {string} JsonWebToken
 */
module.exports.gToken = (obj) => {
    return jwt.sign(obj, secret, { expiresIn: '1h' })
}