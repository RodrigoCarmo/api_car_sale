const { SearchCarService } = require("../useCases/SearchCarService");

class SearchCarController {

    async handle(request, response) {
        const {
            brand,
            model,
            version,
            year,
            traveled_kilometer,
            gearshift,
            sale_price
        } = request.query

        const searchCarService = new SearchCarService();

        const searchCar = await searchCarService.execute(
            {
                brand,
                model,
                version,
                year,
                traveled_kilometer,
                gearshift,
                sale_price
            }
        );

        return response.json(searchCar)
    }
}

module.exports = { SearchCarController }