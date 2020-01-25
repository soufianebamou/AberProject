const express = require('express')
const Cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user = require('./routes/user')
const { DB, allowed_url } = require('./config/config.js')

const app = express()

app.use(Cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const connectDb = async () => {
	try {
		await mongoose.connect(DB, { useNewUrlParser: true })
		console.log('mongoDB connected')
	} catch (err) {
		console.log(err)
	}
}

connectDb()

app.use('/api/user', user)
app.use('/api/post', post)
// app.use('/api/profile', profile)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening to requests on port: ${port}`))
