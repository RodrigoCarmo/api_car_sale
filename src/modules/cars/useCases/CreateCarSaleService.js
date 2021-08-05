const { CarRepository } = require("../repositories/CarRepository");

class CreateCarSaleService {


    async execute({
        brand,
        model,
        version,
        year,
        traveled_kilometer,
        gearshift,
        sale_price
    }) {
        const carRepository = new CarRepository();

        const createCarSale = await carRepository.create({
            brand,
            model,
            version,
            year,
            traveled_kilometer,
            gearshift,
            sale_price
        })

        return createCarSale;

    }
}

module.exports = { CreateCarSaleService }