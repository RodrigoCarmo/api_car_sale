const { CarRepository } = require('../repositories/CarRepository')
const { CarRepositoryInMemory } = require('../repositories/CarRepository')

const DeleteCarService = {
  carRepository: undefined,

  async execute(id) {
    if (process.env.MODE === 'develop') {
      this.carRepository = CarRepositoryInMemory
    }

    this.carRepository = CarRepository

    const checkId = await this.carRepository.findOneById(id)

    if (!checkId) {
      console.log('This car id is invalid!')
    }

    const deleteCar = await this.carRepository.deleteCar(id)

    return deleteCar
  }
}

module.exports = { DeleteCarService }
