const { Router } = require('express');

const { CarCreateController } = require('../../modules/cars/controllers/CarCreateController.js');
const { DeleteCarController } = require('../../modules/cars/controllers/DeleteCarController.js');
const { FindCarByIdController } = require('../../modules/cars/controllers/FindCarByIdController.js');
const { ListCarsController } = require('../../modules/cars/controllers/ListCarsController.js');
const { UpdateCarController } = require('../../modules/cars/controllers/UpdateCarController.js');

const carsRoutes = Router();

const carCreateController = new CarCreateController();
const listAllCarsController = new ListCarsController();
const findCarByIdController = new FindCarByIdController();
const updateCarController = new UpdateCarController();
const deleteCarController = new DeleteCarController();



carsRoutes.post('/', carCreateController.handle);

carsRoutes.get('/', listAllCarsController.handle);
carsRoutes.get('/:id', findCarByIdController.handle);


carsRoutes.put('/:id', updateCarController.handle);

carsRoutes.delete('/:id', deleteCarController.handle);

module.exports = { carsRoutes }

