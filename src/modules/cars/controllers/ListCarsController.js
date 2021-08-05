const { ListAllCarsService } = require("../useCases/ListAllCarsService");



async function ListCarsController(request, response) {

    const listAllCarsService = new ListAllCarsService();

    const allCars = await listAllCarsService.execute();

    return response.json(allCars)
}


module.exports = { ListCarsController }