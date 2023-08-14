import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import connectDB from './db'
import User from './models/User'

const app = express()
app.use(express.json()) //parse JSON body
app.use(cors())

connectDB() // connect to MongoDB

const port = process.env.PORT || 3000

app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    //TODO: Handle secret-key in env
    const token = jwt.sign({ userId: newUser._id }, 'your-secret-key'); 

    res.status(201).json({ message: 'User registered successfully', token })
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).send('Error registering user');
  }
});


// Authenticate a user
app.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email, password })

    if (!user) {
      res.status(401).send('Invalid credentials')
    } else {
      // Generate a JWT
      const token = jwt.sign({ userId: user._id }, 'your-secret-key')

      res.status(200).json({ message: 'User authenticated', token })
    }
  } catch (error) {
    res.status(400).send('Error authenticating user')
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
