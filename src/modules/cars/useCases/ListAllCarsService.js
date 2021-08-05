const { CarRepository } = require("../repositories/CarRepository");

class ListAllCarsService {

    async execute() {
        const carRepository = new CarRepository();

        const listAllCars = await carRepository.listAllCars();

        return listAllCars;
    }
}

module.exports = { ListAllCarsService }