var mongoose = require('mongoose');
const schema = mongoose.Schema;

const packageSchema = new schema({
    courseName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },


})
module.exports = Package = mongoose.model('packages', packageSchema)