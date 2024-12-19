const express =require("express");
const app =express();
const cookieParser= require("cookie-parser");
const path =require("path");
const db = require("./config/mongoose-connection");
const ownersRouter=require("./routes/ownersRouter");
const productsRouter=require("./routes/productsRouter");
const usersRouter=require("./routes/usersRouter");
const expressSession=require("express-session");
const flash = require("connect-flash");

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extented:true}));
app.use(cookieParser());
app.use(expressSession({
    saveUninitialized:false,
    resave:false
}))
app.use(flash());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);


app.listen(3000);
