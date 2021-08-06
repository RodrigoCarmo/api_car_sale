const { CarRepository } = require('../repositories/CarRepository')

const UpdateCarService = {
  async execute(
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
  ) {
    if (process.env.MODE === 'develop') {
      this.carRepository = CarRepositoryInMemory
    }

    this.carRepository = CarRepository

    await this.carRepository.updateCar(
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
  }
}

module.exports = { UpdateCarService }
