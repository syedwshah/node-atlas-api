import express from 'express'

import connectDB from './db'
import User from './models/User'

const app = express()
connectDB() // connect to MongoDB

const port = process.env.PORT || 3000

// Register a new user
app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    res.status(201).send('User registered successfully')
  } catch (error) {
    res.status(400).send('Error registering user')
  }
})

// Authenticate a user
app.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email, password })
    if (!user) {
      res.status(401).send('Invalid credentials')
    } else {
      res.status(200).send('User authenticated')
    }
  } catch (error) {
    res.status(400).send('Error authenticating user')
  }
})

// Default route
app.get('/', (_req, res) => {
  res.send('Connected')
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
