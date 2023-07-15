const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
const jwt = require('jsonwebtoken');
require('dotenv').config();
const collection = require('./db/db')
const bcrypt = require('bcryptjs')

app.get('/', (req, res) => {
  res.json({"message":"Hello from the server"})
});

const PORT = process.env.PORT || 3000; // Use the port from environment variables or default to 3000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const user = await collection.findOne({username})

    if(!user)
    {
        return res.status(401).json("Invalid email or password!")
    }

    // checking if password is correct
    const isValidPassword = await bcrypt.compare(password,user.password)

    if(!isValidPassword)
    {
        return res.status(401).json("Invalid password!")
    }

    const payload = {
        fullname: user.fullname,
        username: user.username,
        password: user.password
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: '6d'});

    res.status(200).json({
        message:'Login successful!',
        token: token
    })
})

app.post('/signup',async(req,res)=>{
    const {username,password,fullname} = req.body;
    const salt = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(password,salt);
    const newUser = new collection({
        fullname,
        username,
        password: securedPassword
    })
    const userCreated = await newUser.save()
    if(!userCreated)
    {
        console.log('User cannot be created');
        return res.status(500).json('User cannot be created');
    }
    else
    {
        console.log('User has been created');
        return res.status(200).json('User created successfully!');
    }
})