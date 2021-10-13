const { createUser } = require('../controller/user');
const express = require('express');
const app = express();


/** @module User */

module.exports = (app, nextMain) => {

  // app.post('/users', middleUser, controllerUser);
  app.post('/users', createUser );

    


  return nextMain();
};

// /** @module users */
// module.exports = (app, next) => {
//   /**
//    * @name GET /users
//    * @description Lista usuarias
//    * @path {GET} /users
//    * @query {String} [page=1] Página del listado a consultar
//    * @query {String} [limit=10] Cantitad de elementos por página
//    * @header {Object} link Parámetros de paginación
//    * @header {String} link.first Link a la primera página
//    * @header {String} link.prev Link a la página anterior
//    * @header {String} link.next Link a la página siguiente
//    * @header {String} link.last Link a la última página
//    * @auth Requiere `token` de autenticación y que la usuaria sea **admin**
//    * @response {Array} users
//    * @response {String} users[]._id
//    * @response {Object} users[].email
//    * @response {Object} users[].roles
//    * @response {Boolean} users[].roles.admin
//    * @code {200} si la autenticación es correcta
//    * @code {401} si no hay cabecera de autenticación
//    * @code {403} si no es ni admin
//    */
//    app.post('/users', (req, res) => {
//     res.send('createUser');
//     console.log('createUser')
//   });
// }
