const CarModel = require('../../../database/schemas/Car')

const CarRepositoryInMemory = {
  cars: [],
  async create({
    brand,
    model,
    version,
    year,
    traveled_kilometer,
    gearshift,
    sale_price
  }) {
    const carObj = {
      brand,
      model,
      version,
      year,
      traveled_kilometer,
      gearshift,
      sale_price
    }

    const car = this.cars.push(carObj)

    return car
  },

  async listAllCars() {
    return this.cars
  },
  async findOneById(id) {
    const carById = await this.cars.find((car) => id === car.id)

    return carById
  },

  async updateCar(
    {
      id,
      brand,
      model,
      version,
      year,
      traveled_kilometer,
      gearshift,
      sale_price
    }) {
    const carObj = {
      brand,
      model,
      version,
      year,
      traveled_kilometer,
      gearshift,
      sale_price
    }

    const cars = this.cars.map((car) => ({ ...car, carObj }))
    this.cars.push(cars)
  },

  async deleteCar(id) {
    const car = this.cars.findIndex((car) => car.id === id)

    this.cars.splice(car, 1)

    return car
  }

}

module.exports = { CarRepositoryInMemory }
