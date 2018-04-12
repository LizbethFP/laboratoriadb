'use strict';

const User = require('../models/user');

function prueba(request, response) {
  response.status(200).send({
    message: "Probando petición get"
  });
}

function saveUser(request, response) {
  var user = new User();

  user.name = request.body.name;
  user.password = request.body.password;
  user.email = request.body.email;
  user.profile = request.body.profile;
  user.jobTitle = request.body.jobTitle;
  user.description = request.body.description;
  user.projectId = request.body.projectId;


  user.save((error, userStored) => {
    if (error) {
      response.status(400).send({
        message: "Error al guardar"
      });
    } else {
      response.status(200).send({
        message: "Se guardo con exito"
      });
    }
  });
}

function signIn(request, response){
  // Instanciar el modelo para hacer peticiones
  var user = new User();

  user.password = request.body.password;
  user.email = request.body.email;

}

module.exports = {
  prueba,
  saveUser
};