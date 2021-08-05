const { CreateCarSaleService } = require('../useCases/CreateCarSaleService.js')


async function CreateCarController(request, response) {

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


}


module.exports = { CreateCarController }

