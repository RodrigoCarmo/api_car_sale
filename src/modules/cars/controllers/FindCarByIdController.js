const { FindCarByIdService } = require('../useCases/FindCarByIdService')

async function FindCarByIdController(request, response) {
  const { id } = request.params

  const findCarByIdService = new FindCarByIdService()

  const car = await findCarByIdService.execute(id)

  if (car === null) {
    return response.status(404).send()
  }

  return response.status(201).json(car)
}

module.exports = { FindCarByIdController }
