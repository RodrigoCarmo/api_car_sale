const { CreateCarSaleService } = require('../../src/modules/cars/useCases/CreateCarSaleService')

describe('Create a new car', () => {
  it('should be able a create new car', async () => {
    const createCarService = await CreateCarSaleService.execute({
      brand: 'Fiat',
      model: 'Palio',
      version: '2.0',
      year: 2021,
      traveled_kilometer: 4000,
      gearshift: 'manual',
      sale_price: 30000
    })

    console.log(createCarService)

    expect(createCarService).toBeTruthy()
  })
})
