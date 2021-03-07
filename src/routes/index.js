const listRoutes = require('../modules/list.routes')

module.exports = (app) => {
    app.use('/list', listRoutes)
}