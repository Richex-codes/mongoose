const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schema1 = new schema({
    name: {
    type: String,
    required: true,
    },

    age: {
    type: Number,
    },

    favouriteFoods:[String]
});


module.exports = mongoose.model('user', schema1, 'persons')
