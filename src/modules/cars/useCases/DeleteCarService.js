const { CarRepository } = require("../repositories/CarRepository");

class DeleteCarService {
    async execute(id) {
        const carRepository = new CarRepository();

        const checkId = carRepository.findOneById(id);

        if (!checkId) {
            console.log("This car id is invalid!")
        }

        const deleteCar = await carRepository.deleteCar(id)

        return deleteCar;
    }
}

module.exports = { DeleteCarService }