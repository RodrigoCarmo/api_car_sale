const { UpdateCarService } = require("../useCases/UpdateCarService");



async function UpdateCarController(request, response) {

    const { id } = request.params
    const {
        brand,
        model,
        version,
        year,
        traveled_kilometer,
        gearshift,
        sale_price } = request.body

    const updateCarService = new UpdateCarService();

    const car = await updateCarService.execute({
        id,
        brand,
        model,
        version,
        year,
        traveled_kilometer,
        gearshift,
        sale_price
    });

    return response.json({ car })
}


module.exports = { UpdateCarController }