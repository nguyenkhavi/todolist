const knex = require('../services/database')

const getActs = async (req, res) => {
    const query = knex.select().from('todo')
    const data = await query.clone()
    const total = (await query.clone().count())[0]['count(*)']
    res.status(200).json({ data, total })
}
const createAct = async (req, res) => {
    const title = req.body.title || "[Khong xac dinh]"
    const is_done = req.body.is_done
    const query = knex('todo')
        .insert({ title: title, is_done: is_done })
    const data = await query.clone()
    res.status(200).json(data)
}
const updateAct = async (req, res) => {
    const { id } = req.params
    const { title, is_done } = req.body
    await knex("todo").where({ id: id }).update({ title: title, is_done: is_done })
    const data = await knex("todo").where({ id })
    res.status(200).json(data)

}

const deleteAct = async (req, res) => {
    const { id } = req.params
    await knex("todo").where({ id }).del()
    res.status(200).json({ success: 'success' })
}
module.exports = {
    getActs,
    createAct,
    updateAct,
    deleteAct
}