const express= require ('express')
const app= express()
const mongoose= require ('mongoose')
require('dotenv/config')
const aboutRoute=require('./Router/about')
const bodyParser= require('body-parser')

//middlewares -> is a function that's always gonna execute when we hit the Route
/*app.use('/',(req,res, next)=>{
    console.log("Server is running");
    next();
})*/

//to use body parser as middleware all the time
app.use(bodyParser.json());

//Routing
app.get('/',(req,res)=>{
    res.send("We are at home")
})
//import routes
app.use('/about',aboutRoute)

//connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},()=>{console.log('connected to mongodb!')})
/*mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})*/
//listening
app.listen(8081)