const { response } = require('express')
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000
const customerRoute = require('./routes/customers')
const cors = require('cors')

require('dotenv/config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', customerRoute)

mongoose.connect(process.env.DB_CONNECTION,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log('connected to DB'))



app.listen(PORT, () => console.log(`server started on ${PORT}`))