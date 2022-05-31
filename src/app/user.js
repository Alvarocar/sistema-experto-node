const Client = require('../domain/client')
const jwt = require('../util/jwt')

/**
 * 
 * @param {*} user 
 * @returns {Promise<string>} Json Web Token
 */
module.exports.createUser = async (
    user = { fullname: '', email: '', password: '' }
) => {
    const doubleclient = await Client.findOne({ where: { email: user.email } })

    if (doubleclient != null) {
        throw new Error('Email ya registrado')
    }
    const newClient = Client.build({
        full_name: user.fullname,
        email: user.email.toLowerCase(),
        password: user.password,
    })
    try {
        const clientResult = await newClient.save()
        return jwt.gToken(clientResult.get({ plain: true }))
    } catch(e) {
        console.error(e)
        throw new Error('Algo salio mal')
    }
}

/**
 * 
 * @param {*} user 
 * @returns {Promise<string>} Json Web Token
 */
module.exports.getToken = async (
    user = { email: '', password: '' }
) => {
    try {
       const client =  await Client.findOne({ where: { email: user.email.toLowerCase(), password: user.password } })
        if (client === null) {
            throw new Error('Email o contraseña incorrecta')
        }
        return jwt.gToken(client.get({ plain: true }))
    } catch (e) {
        console.error(e)
        throw new Error('Algo salio mal')
    }
}