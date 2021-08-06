const { CarRepository } = require('../repositories/CarRepository')

const FindCarByIdService = {
  carRepository: undefined,
  async execute(id) {
    if (process.env.MODE === 'develop') {
      this.carRepository = CarRepositoryInMemory
    }

    this.carRepository = CarRepository

    const checkId = this.carRepository.findOneById(id)

    if (!checkId) {
      console.log('This car id is invalid!')
    }

    const findCarById = await this.carRepository.findOneById(id)

    return findCarById
  }
}

module.exports = { FindCarByIdService }
