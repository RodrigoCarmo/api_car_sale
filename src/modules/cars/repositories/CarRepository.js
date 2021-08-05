const { MongoClient } = require('mongodb');

const { mongoose } = require("mongoose")
const CarModel = require('../../../database/schemas/Car');

const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const client = new MongoClient(uri);

class CarRepository {

    async create({
        brand,
        model,
        version,
        year,
        traveled_kilometer,
        gearshift,
        sale_price }) {


        const carObj = {
            brand,
            model,
            version,
            year,
            traveled_kilometer,
            gearshift,
            sale_price
        };

        await CarModel.create(carObj);

        return carObj;

    }

    async listAllCars() {
        const cars = await CarModel.find()

        return cars;
    }

    async findOneById(id) {
        const carById = await CarModel.findById(id)

        return carById
    }

    async updateCar(
        { id,
            brand,
            model,
            version,
            year,
            traveled_kilometer,
            gearshift,
            sale_price }) {

        await client.connect()

        const update = await client.db("car_sale").collection("cars").updateOne({ _id: id }, {
            "$set": {
                "brand": brand,
                "model": model,
                "version": version,
                "year": year,
                "traveled_kilometer": traveled_kilometer,
                "gearshift": gearshift,
                "sale_price": sale_price
            }
        }, { upsert: true })

        await client.close()

        return update;
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


        const cars = await CarModel.find({
            "$or": [{
                "brand": brand
            },
            {
                "model": model
            },
            {
                "version": version
            },
            {
                "traveled_kilometer": traveled_kilometer
            },
            {
                "gearshift": gearshift
            },
            ]

        })

        if (year) {
            const carYearRangeMax = await CarModel.find({ "year": { $lte: year } })

            return carYearRangeMax;
        }

        if (sale_price) {
            const priceRangeMax = await CarModel.find({ "sale_price": { $lte: sale_price } })

            return priceRangeMax;
        }

        return cars;

    }
}

module.exports = { CarRepository }