const mongoose = require('mongoose');

const server = "mongodb://localhost:27017";
const database = "car_sale";

mongoose.connect(`${server}/${database}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true

    },
).then(() => {
    console.log("Succesfully connect to MongoDB");
})

    .catch(err => {
        console.log("Connection error", err);
        process.exit();
    })

mongoose.Promise = global.Promise

module.exports = mongoose
