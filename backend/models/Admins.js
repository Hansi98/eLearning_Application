var mongoose = require('mongoose');
const schema = mongoose.Schema;

const adminsSchema = new schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})
module.exports = Admins = mongoose.model('admins', adminsSchema)