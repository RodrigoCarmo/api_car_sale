const { UpdateCarService } = require('../useCases/UpdateCarService')

async function UpdateCarController(request, response) {
  const { id } = request.params
  const {
    brand,
    model,
    version,
    year,
    traveled_kilometer,
    gearshift,
    sale_price
  } = request.body

  console.log(request.params)

  const updateCarService = new UpdateCarService()

  await updateCarService.execute({
    id,
    brand,
    model,
    version,
    year,
    traveled_kilometer,
    gearshift,
    sale_price
  })

  return response.status(201).send()
}

module.exports = { UpdateCarController }
