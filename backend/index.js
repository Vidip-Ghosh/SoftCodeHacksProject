const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const collection = require('./db/db')
const bcrypt = require('bcryptjs')
// const contactDB = require('./db/contactDB')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

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

    try {
        if(!user)
        {
            return res.status(401).json("NotExist")
        }
        else
        {
            return res.json("Exist")
        }
    } catch (error) {
        console.log(error);
        res.json('fail')
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
    try {
        const check = await collection.findOne({username:username})
        if(check)
        {
            res.json("exist")
        }
        else
        {
            res.json("NotExist")
            await collection.insertMany([data])
        }
    } catch (error) {
        console.log(error);
    }
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

app.post('/contact-form',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    var contactEmail = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    contactEmail.verify((error)=>{
        if (error) 
        {
            console.log(error);
        } 
        else {
            console.log("Ready to Send");
        }
    })
    var mailOptions = {
        from: process.env.EMAIL,
        to: req.body.name,
        subject: 'Thanks for the feedback' + name,
        text: `Thank you ${name} for your message you have sent to us ${message}`
    }
    contactEmail.sendMail(mailOptions, (err,info)=>{
        if(err)
        {
            res.json({ status: "ERROR" });
            console.log('Error');
        }
        else
        {
            res.json({ status: "Message Sent" });
            console.log('Email sent successful' + info.response);
        }
    })
})