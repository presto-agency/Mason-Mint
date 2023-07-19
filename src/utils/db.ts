import mongoose, { ObjectId } from 'mongoose'
import { CategoryProps, ProductProps } from '@/utils/types'

type connectionProps = {
  isConnected?: boolean | number
}

const connection: connectionProps = {}

const connect = async () => {
  if (connection.isConnected) {
    console.log('DB already connected')
    return
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      console.log('Use previous DB connection')
      return
    }
    await mongoose.disconnect()
  }
  const db = await mongoose.connect(process.env.MONGODB_URI as string)
  console.log('New DB connection')
  connection.isConnected = db.connections[0].readyState
}

const disconnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect()
      connection.isConnected = false
    } else {
      console.log('DB is not disconnected')
    }
  }
}

const convertDocToObj = (doc: any) => {
  doc._id = (doc._id as ObjectId).toString()
  return doc
}

const db = { connect, disconnect, convertDocToObj }

export default db
