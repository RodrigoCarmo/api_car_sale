const { CarRepository } = require('../repositories/CarRepository')

const SearchCarService = {

  async execute({
    brand,
    model,
    version,
    year,
    traveled_kilometer,
    gearshift,
    sale_price
  }) {
    this.carRepository = CarRepository

    const searchCar = await this.carRepository.searchCar({
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
