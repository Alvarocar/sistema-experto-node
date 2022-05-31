const pl = require("tau-prolog")
const session = pl.create()
const { resolve } = require('path')


const show = callback => {
    return x => {
        /* const records = session.format_answer(x).split('\n').filter(v => v !== 'false')
        callback(records.map(v => v.split(' ')[2])) */
        const option = session.format_answer(x).split(' ')[2]
        console.log(option)
        callback(option)
    }
} 

const expDir = resolve(__dirname, '..', '..', 'config', 'ex.pl') 


function start({
    query = 'init(X)',
    callback
}) {
    session.consult(expDir, {
            success: function() {
                session.query(`${query}.`, {
                success: function() {
                    session.answers(show(callback))
                }
            })
        },
        error: function(e) {
            console.error(e)
        }
    })
}

const callbackTest = (array) => {
    console.log(array)
}

module.exports.consult = ({ query = 'init(X)', callback = callbackTest }) => {
    start({ query, callback })
}


