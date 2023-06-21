const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// Our Routes
const mainRoutes = require("./routes/index")

// Serving Static Files
app.use(express.static(path.join(__dirname ,"public")));

// Setting Search Engine
app.set("view engine" , "ejs");

// Using Our Routes
app.use("/" , mainRoutes);

// Not Found Page
app.all("*" , (req,res)=>{
    res.render("notfound" , {title : "Not Found"});
})

app.listen(3000, ()=>{
    console.log("App Is Litening");
})