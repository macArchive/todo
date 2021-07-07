import mongoose from 'mongoose'

export default dbConnection = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

    const db = mongoose.connection

    db.on('error', () => {
      console.error.bind(console, 'connection error')

      reject(
        new Error(
          'Connection error has occured when trying to connect to the database!'
        )
      )
    })

    db.once('open', () => resolve('Successful database connection.'))
  })
