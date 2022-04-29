const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { path } = require("express/lib/application");

const app = express()

//motor de plantillas
app.set('view engine','ejs')

//seteamos la carpeta public   par archivos estaticos 
app.use(express.static('public'))

//para porecesar datos enviados desdeel forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables deentorno 
dotenv.config({path: './env/.env'})

//app.use(cookieParser)

//LLamar al router
app.use('/', require('./routes/router'))


app.listen(3000, ()=>{
    console.log('Servidor UP en el puerto http://localhost:3000')
})