const mongoose = require('mongoose')

const todo = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },

    done: {
        type: Boolean,
        required: true

    },
})
module.exports = mongoose.model('todo' , todoSchema)