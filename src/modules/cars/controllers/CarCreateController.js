
const { CreateCarSaleService } = require('../useCases/CreateCarSaleService.js')

class CarCreateController {

    constructor() {

    }

    async handle(request, response) {
        try {
            const {
                brand,
                model,
                version,
                year,
                traveled_kilometer,
                gearshift,
                sale_price
            } = request.body;

            const createCarSaleService = new CreateCarSaleService()

            const service = await createCarSaleService.execute({
                brand,
                model,
                version,
                year,
                traveled_kilometer,
                gearshift,
                sale_price,
            })

            return response.status(201).json(service)

        } catch (err) {
            return response.status(400).send({ error: "Error to create a new car!" })
        }
    }
}

module.exports = { CarCreateController }

