const { CarRepository } = require('../repositories/CarRepository')

const ListAllCarsService = {
  carRepository: undefined,
  async execute() {
    if (process.env.MODE === 'develop') {
      this.carRepository = CarRepositoryInMemory
    }

    this.carRepository = CarRepository

    const listAllCars = await this.carRepository.listAllCars()

    return listAllCars
  }
}

module.exports = { ListAllCarsService }
