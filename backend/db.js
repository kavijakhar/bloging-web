const mongoose = require('mongoose')
const mongooseURL = "mongodb://localhost:27017/myApp"

const connectTomongo = () => {
    mongoose.connect(mongooseURL ,()=>{
   console.log("Connected to Mongo Successfully")
    })
}

module.exports = connectTomongo;