const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const formidableMiddleware = require('express-formidable')
require('dotenv').config()
const config = require('./config/database.js')
const cors = require('cors')

// Mongoose update "true" to use strictQuery
mongoose.set('strictQuery', true);


//^ --- Initialize Server ----
const app = express()

//^ --- Middleware ----
app.use(cors())
app.use(formidableMiddleware())

//^ --- Set Routes ----
const parties = require('./routes/parties-routes.js')
const sections = require('./routes/sections-routes.js')


app.use('/parties', parties)
app.use('/sections', sections)

//^---- Connect to MongoDB ------
mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
//^ ------ Checking for errors connecting to database ----
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => console.log("Connected to MongoDB"))


//^ --- Set public folder to export to Cloud ---
app.use(express.static(path.join(__dirname, 'public')))

//^ ---  Add headers - allowing origin from localhost/8080 ---
app.use(function (req, res, next) {
    // Website connecting to
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  
    // Request methods being allowed
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers being allowed
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Passing to next layer of middleware
    next();
  });

  //^ ----- Handle production -------
if(process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'))
  
    //^ ----- Handle Vue SPA -------
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
  
  }

//?---- API LISTEN ROUTE - listens for the port user will be making requests to view data ----
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    // PORT listened to by mongoDB
    console.log(`Server now on port ${PORT}!`)
  })