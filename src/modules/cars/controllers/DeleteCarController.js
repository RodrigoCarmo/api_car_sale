const { DeleteCarService } = require("../useCases/DeleteCarService");

class DeleteCarController {

    async handle(request, response) {
        const { id } = request.params

        const deleteCarService = new DeleteCarService();

        const deleteCar = await deleteCarService.execute(id);

        return response.status(201).json(deleteCar)
    }
}

module.exports = { DeleteCarController }