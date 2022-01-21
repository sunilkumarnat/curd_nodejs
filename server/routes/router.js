const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description for index (all users) 
 * @method GET / index
 */
route.get('/', services.index)

/**
 * @description for add new user
 * @method GET / add_user
 */
route.get('/add-user', services.add_user)

/**
 * @description for update user 
 * @method GET / update_user
 */
route.get('/update-user', services.update_user)

/// API

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;