require('dotenv/config')
const mongoose = require("mongoose")

try {
    const uri = process.env.MONGO_URL
    mongoose.connect(
        uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    )
} catch (err) {
    console.log(err)
}

mongoose.Promise = global.Promise

module.exports = mongoose