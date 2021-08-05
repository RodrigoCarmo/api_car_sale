const { DeleteCarService } = require("../useCases/DeleteCarService");



async function DeleteCarController(request, response) {
    const { id } = request.params

    const deleteCarService = new DeleteCarService();

    const deleteCar = await deleteCarService.execute(id);

    return response.status(201).json(deleteCar)
}


module.exports = { DeleteCarController }