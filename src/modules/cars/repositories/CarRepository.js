const CarModel = require('../../../database/schemas/Car')

class CarRepository {
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

    const car = await CarModel.create(carObj)

    return car
  }

  async listAllCars() {
    const cars = await CarModel.find()

    return cars
  }

  async findOneById(id) {
    const carById = await CarModel.findById(id)

    return carById
  }

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

    await CarModel.updateOne({ _id: id }, carObj)
  }

  async deleteCar(id) {
    const car = await CarModel.deleteOne({ _id: id })

    return car
  }

  async searchCar({
    brand,
    model,
    version,
    year,
    traveled_kilometer,
    gearshift,
    sale_price
  }) {
    if (brand) {
      const brandfilter = await CarModel.find({ brand: { $regex: brand, $options: 'i' } })
      return brandfilter
    }

    if (model) {
      const modelFilter = await CarModel.find({ model: { $regex: model, $options: 'i' } })
      return modelFilter
    }

    if (version) {
      const versionFilter = await CarModel.find({ version: { $regex: version, $options: 'i' } })
      return versionFilter
    }

    if (traveled_kilometer) {
      const traveled_kilometerFilter = await CarModel.find({ traveled_kilometer: { $lte: traveled_kilometer } })

      return traveled_kilometerFilter
    }

    if (year) {
      const carYearRangeMax = await CarModel.find({ year: { $lte: year } })

      return carYearRangeMax
    }

    if (gearshift) {
      const gearshiftFilter = await CarModel.find({ gearshift: { $lte: gearshift } })

      return gearshiftFilter
    }

    if (sale_price) {
      const priceRangeMax = await CarModel.find({ sale_price: { $lte: sale_price } })

      return priceRangeMax
    }
  }
}

module.exports = { CarRepository }
