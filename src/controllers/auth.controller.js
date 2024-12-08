const data = require("../models/data.model")

const save = async (req, res) => {
    try{
        const newData = new data(req.body)
        await newData.save()
        res.status(201).send("Data saved.")
    } catch(err) {
        res.send(err)
    }
}

const show = async (req, res) => {
    try{
        data.find()
        .then((data) => { res.send(data) })
        .catch((err) => { res.send(err) })
    } catch(err) {
        res.send(err)
    }
}

module.exports = { save, show }