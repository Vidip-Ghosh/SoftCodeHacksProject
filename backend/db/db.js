const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to Main database');
})
.catch(()=>{
    console.log('Error');
})

const newSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type : String,
        unique: true,
        required: [true,'Username is Required']
    },
    password: {
        type:String,
        required: true
    }
})

const collection = mongoose.model('collection',newSchema);
module.exports = collection