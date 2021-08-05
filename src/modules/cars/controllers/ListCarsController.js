const { ListAllCarsService } = require("../useCases/ListAllCarsService");

class ListCarsController {

    async handle(request, response) {

        const listAllCarsService = new ListAllCarsService();

        const allCars = await listAllCarsService.execute();

        return response.json(allCars)
    }
}

module.exports = { ListCarsController }