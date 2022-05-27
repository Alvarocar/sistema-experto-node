const pl = require("tau-prolog")
const session = pl.create(1000)
const { resolve } = require('path')

const dir = resolve(__dirname, 'config', "ex.pl")


const print = x => {
    let result = session.format_answer(x)
    if(typeof result === 'array') {
        result = result.join('')
    }
    console.log(result)
}

session.consult(dir, {
    success: function() {

        session.query(`
            opciones(X, aventura).
        `, {
            success: function() {
                session.answers(print)
            }
        })
    },
    error: function(e) {
        console.log(e)
    }
})