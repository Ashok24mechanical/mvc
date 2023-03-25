const express = require('express');
const {getMethod,postmethod, getone} = require('../controller/userControler')

routes= express.Router();

routes.get('/get',getMethod)
routes.post('/post',postmethod)
routes.get('/getone',getone)

module.exports = routes;