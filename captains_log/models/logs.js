// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const logsSchema = new Schema({
    title: { type: String, required: true }, 
    entry: { type: String, required: true }, 
    shipIsBroken: Boolean
})

// create a Model from our Schema
const Log = mongoose.model('Log', logsSchema)

// export our Model
module.exports = Log;