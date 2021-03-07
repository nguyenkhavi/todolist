const express = require('express')
const listControllers = require('../modules/list.controllers')

const routes = express.Router()

routes.get('/', listControllers.getActs)

routes.post('/', listControllers.createAct)

routes.put('/:id', listControllers.updateAct)


routes.delete('/:id', listControllers.deleteAct)

module.exports = routes