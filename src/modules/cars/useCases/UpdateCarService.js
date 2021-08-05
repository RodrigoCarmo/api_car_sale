const { CarRepository } = require('../repositories/CarRepository')

class UpdateCarService {
  async execute(
    id,
    brand,
    model,
    version,
    year,
    traveled_kilometer,
    gearshift,
    sale_price
  ) {
    const carRepository = new CarRepository()

    const updateCar = await carRepository.updateCar(
      {
        id,
        brand,
        model,
        version,
        year,
        traveled_kilometer,
        gearshift,
        sale_price
      }
    )

    return updateCar
  }
}

module.exports = { UpdateCarService }
