import mongoose from 'mongoose'
import { config } from 'dotenv-flow'

// Load environment variables from .env files
config()

const uri = process.env.MONGODB_URI || '' // Use the MONGODB_URI from .env

const connectDB = async () => {
  try {
    console.log('MONGODB_URI:', uri)
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

export default connectDB
