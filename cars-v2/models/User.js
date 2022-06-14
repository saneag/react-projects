const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 20, unique: true },
    email: { type: String, required: true, minlength: 3, maxlength: 20, unique: true },
    password: { type: String, required: true, minlength: 6, maxlength: 20 },
    links: [{ type: Types.ObjectId, ref: 'Link' }]
})

module.exports = model('User', schema)