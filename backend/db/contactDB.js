const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/contact-form').then(()=>{
    console.log('Connected to Contact database');
})
.catch(()=>{
    console.log('Error');
})

const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type : String,
        required: true
    },
    message: {
        type :String,
        required:true
    }
})

const messageCollection = mongoose.model('messageCollection',newSchema);
module.exports = messageCollection