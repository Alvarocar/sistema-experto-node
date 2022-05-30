const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'postgres',
   database: 'movie_expert',
   username: 'expert',
   password: 'expert',
   host: 'localhost',
   port: 3535,
   define: {
       freezeTableName: true
   }
})

(function testConnection() {
    sequelize.authenticate()
    .then(() => {
        console.info(`Connection has been established`)
    })
    .catch(() => {
        console.error(`Unable to connect to the database`, error)
    })
})()

export default sequelize