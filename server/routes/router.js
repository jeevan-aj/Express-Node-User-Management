const express = require('express')
const route = express.Router()

const services = require('../services/render')

/**
 * @description Root Route
 * @MEHTOD GET/
 */

route.get('/',services.homeRoutes)

/**
 * @description add user
 * @MEHTOD GET/ 
 */

route.get('/add_user',services.newUserRoutes)

/**
 * @description update user
 * @MEHTOD GET/ 
 */

route.get('/update_user',services.updateRoutes)

module.exports = route