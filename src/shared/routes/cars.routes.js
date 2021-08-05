const { Router } = require('express');

const { CreateCarController } = require("../../modules/cars/controllers/CarCreateController")
const { DeleteCarController } = require('../../modules/cars/controllers/DeleteCarController.js');
const { FindCarByIdController } = require('../../modules/cars/controllers/FindCarByIdController.js');
const { ListCarsController } = require('../../modules/cars/controllers/ListCarsController.js');
const { UpdateCarController } = require('../../modules/cars/controllers/UpdateCarController.js');
const { carUpdateValidator, carValidationResult, carCreateValidator, carFindByIdValidator } = require('../../modules/cars/utils/validators.js');

const carsRoutes = Router();


carsRoutes.post('/', carCreateValidator, carValidationResult, CreateCarController)

carsRoutes.get('/', ListCarsController);


carsRoutes.get('/:id', carFindByIdValidator, carValidationResult, FindCarByIdController);


carsRoutes.put('/:id', carUpdateValidator, carValidationResult, UpdateCarController);

carsRoutes.delete('/:id', carFindByIdValidator, carValidationResult, DeleteCarController);

module.exports = { carsRoutes }

