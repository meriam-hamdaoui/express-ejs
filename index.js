// require express
const express = require("express");

//call the routers
const routers = require(__dirname + "/routes/routes");

//import the local modules
const { workTime } = require(__dirname + "/middlewares/workTime");

//import the call back listener
const { listener } = require(__dirname + "/controllers/listener");

//create port for our server
const port = 5000;

//connect app to express
const app = express();

//use the ejs template
app.set("view engine", "ejs");

app.use("/", workTime, routers);
app.use("/services", routers);
app.use("/contact", routers);

//listen to the request
app.listen(port, (err) => listener(err, port));
