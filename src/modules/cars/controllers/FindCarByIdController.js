const { FindCarByIdService } = require("../useCases/FindCarByIdService");

class FindCarByIdController {

    async handle(request, response) {

        const { id } = request.params

        const findCarByIdService = new FindCarByIdService();

        const car = await findCarByIdService.execute(id);

        return response.json({ car })
    }
}

module.exports = { FindCarByIdController }