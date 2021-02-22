const knex = require('../models/db.model')

const getActs = (req, res) => {
    knex.select().from('todo')
        .then(data =>
            res.json(data)
        )

}
const addAct = (req, res) => {
    const title = req.body.title || "[Khong xac dinh]"
    const is_done = req.body.is_done
    knex('todo')
        .insert({ title: title, is_done: is_done })
        .then(data => res.json(data))
        .catch(err => console.log(err))

}
const updateAct = (req, res) => {
    const id = req.params.id
    const { title, is_done } = req.body
    knex("todo").where("id", id)
        .update({ title: title, is_done: is_done })
        .catch(err => console.log(err))

}

const deleteAct = (req, res) => {
    const id = req.params.id
    knex("todo")
        .where("id", id)
        .del()
        .catch(err => console.log(err))
}
module.exports = {
    getActs,
    addAct,
    updateAct,
    deleteAct
}