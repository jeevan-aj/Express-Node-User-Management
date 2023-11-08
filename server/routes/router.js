const express = require('express')
const controller = require('../controller/controller')
const route = express.Router()


const services = require('../services/render')

/**
 * @description Root Route
 * @MEHTOD GET/
 */
route.get('/',services.homeRoutes)

/**
 * @description add user page
 * @MEHTOD GET/ 
 */

route.get('/add_user',services.newUserRoutes)

/**
 * @description update user page
 * @MEHTOD GET/ 
 */

route.get('/update_user',services.updateRoutes)

//    API
//create new user
route.post('/api/create_user',controller.create)

//find and return a single user and find and retrive all users
route.get('/api/find',controller.find)

//update a user by finded id
route.put('/api/update/:id',controller.update);

//delete a element by id
route.delete('/api/delete/:id',controller.delete)


module.exports = route