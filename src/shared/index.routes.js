const { Router } = require('express')
const { SearchCarController } = require('../modules/cars/controllers/SearchCarController.js')
const { carsRoutes } = require('./routes/cars.routes.js')

const router = Router()

router.use('/api-cars', carsRoutes)

router.get('/search', SearchCarController)

module.exports = { router }
