const { CarRepository } = require('../repositories/CarRepository')
const { CarRepositoryInMemory } = require('../repositories/CarRepository')

const CreateCarSaleService = {
  carRepository: undefined,
  async execute({
    brand,
    model,
    version,
    year,
    traveled_kilometer,
    gearshift,
    sale_price
  }) {
    if (process.env.MODE === 'develop') {
      this.carRepository = CarRepositoryInMemory
    }

    this.carRepository = CarRepository

    const createCarSale = await this.carRepository.create({
      brand,
      model,
      version,
      year,
      traveled_kilometer,
      gearshift,
      sale_price
    })

    return createCarSale
  }
}

module.exports = { CreateCarSaleService }
