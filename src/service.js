const exp = require('./expert')

function init(callback) {
    exp.consult({ callback })
}


module.exports.query = (answers, callback) => {
    if (answers.length <= 0) {
        init(callback)
        return
    }
    const query = answers.map(v => `opciones(X, ${v})`).join(',')
    console.log(query)
    exp.consult({
        query,
        callback
    })
}

module.exports.findMovie = (answers, callback) => {
   const query = answers.map(v => `caracteristica(X, ${v})`).join(',')
   console.log(query)
   exp.consult({
    query,
    callback
})
}