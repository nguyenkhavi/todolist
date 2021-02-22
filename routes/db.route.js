const express = require('express')
const dbControllers = require('../controllers/bd.controllers')

const routes = express.Router()

routes.get('/todo', dbControllers.getActs)

routes.post('/todo/add', dbControllers.addAct)

routes.put('/todo/:id', dbControllers.updateAct)


routes.delete('/todo/:id', dbControllers.deleteAct)

module.exports = routes