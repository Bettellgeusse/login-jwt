const express = require("express");
const router = express.Router()


const authController = require('../controllers/auth')

//Rutas par las visttas 
router.get('/', authController.isAuthenticated, (req,res) =>{
    res.render('index', {user:req.user})
})

router.get('/login',(req,res) =>{
    res.render('login',{alert:false})
})

router.get('/register',(req,res) =>{
    res.render('register')
})

//rutas del controlador
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
module.exports = router