const express = require("express");
const Route =  express.Router()
const usercontrollers = require("../controllers/usercontrollers");

// All Get Routes

Route.get("https://vercel.com/vikash-bagras-projects/project-2/", (req,res)=>{
    res.render("index")
})

Route.get("/contact-us", usercontrollers.ContactGet)

Route.get("/about-us", usercontrollers.AboutGet)

Route.get("/our-services", usercontrollers.ServicesGet)

Route.get("/blog", usercontrollers.BlogGet)

Route.get("/login", usercontrollers.LoginGet)

Route.get("/register", usercontrollers.RegisterGet)



// Servies Routes 

Route.get("/printing-services",usercontrollers.Printing_Service)




// All Post Routes 






module.exports = Route;