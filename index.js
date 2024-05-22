// require("dotenv").config();
const express = require("express");
const Route =  require("./Routes/routes");
const path = require("path")

const app = express();
const Port =  process.env.PORT || 3000;

app.use(express.json())

// Routes Conncetion 
app.use(Route);

// view engine Setup

const Partials_Path = path.join(__dirname,"./templates/partials");
const Public_Path = path.join(__dirname,"./public/");
const Css_path = path.join(__dirname,"./public/css/");
const Image_Folder = path.join(__dirname,"./public/images/");

app.set("view engine","ejs")
// app.set("views", path.join(__dirname,"./Views/"))

// Partials Setup 

// Public Folder setup  
app.use(express.static(Public_Path)); 
app.use(express.static(Css_path));
app.use(express.static(Image_Folder));



// bootstrap Css Link  

app.use("/css",express.static(path.join(__dirname,"./node_modules/bootstrap/dist/css")))
app.use("/css",express.static(path.join(__dirname,"./node_modules/bootstrap/dist/js")))

app.listen(Port,()=>{
    console.log(`Your server ${Port}`)
});

