const { DeleteCarService } = require('../useCases/DeleteCarService')

async function DeleteCarController(request, response) {
  const { id } = request.params

  const deleteCarService = DeleteCarService

  await deleteCarService.execute(id)

  return response.status(201).send()
}

module.exports = { DeleteCarController }
