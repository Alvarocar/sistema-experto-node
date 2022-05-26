const exp = require('./expert')

function init(callback) {
    exp.consult({ callback })
}

module.exports.query = async (answers, callback) => {
    if (answers.length <= 0) {
        init(callback)
        return
    }
}