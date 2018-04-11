'use strict';

const express = require('express');
const userController = require('../controller/user.controller');

const api = express.Router();

api.get('/probando-controller-user', userController.prueba);
api.post('/guardar-usuario', userController.saveUser);

module.exports = api;