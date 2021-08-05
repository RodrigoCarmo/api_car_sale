const { CarRepository } = require('../repositories/CarRepository')

class SearchCarService {
  async execute({
    brand,
    model,
    version,
    year,
    traveled_kilometer,
    gearshift,
    sale_price
  }) {
    const carRepository = new CarRepository()

    const searchCar = await carRepository.searchCar({
      brand,
      model,
      version,
      year,
      traveled_kilometer,
      gearshift,
      sale_price
    })

    if (searchCar === null) {
      return {}
    }

    return searchCar
  }
}

module.exports = { SearchCarService }
