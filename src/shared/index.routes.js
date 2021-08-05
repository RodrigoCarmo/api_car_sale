const { Router } = require('express');
const { SearchCarController } = require('../modules/cars/controllers/SearchCarController.js');
const { carsRoutes } = require('./routes/cars.routes.js');

const router = Router();

const searchCarController = new SearchCarController();

router.use('/api-cars', carsRoutes);

router.get('/search', searchCarController.handle);

module.exports = { router }

