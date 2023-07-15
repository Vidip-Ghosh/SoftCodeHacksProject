const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hospital-management-system').then(()=>{
    console.log('Connected to database');
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