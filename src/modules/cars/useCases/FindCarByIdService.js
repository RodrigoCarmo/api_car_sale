const { CarRepository } = require("../repositories/CarRepository");

class FindCarByIdService {
    async execute(id) {
        const carRepository = new CarRepository();

        const checkId = carRepository.findOneById(id);

        if (!checkId) {
            console.log("This car id is invalid!")
        }

        const findCarById = await carRepository.findOneById(id)

        return findCarById;
    }
}

module.exports = { FindCarByIdService }