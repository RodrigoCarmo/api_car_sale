const { body, validationResult, param } = require('express-validator');

exports.carValidationResult = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const message = result.array()[0].msg
        const error = result.array()[0].param

        return res.status(400).json({ success: false, message: message, param: error })
    }

    next();
}

exports.carUpdateValidator = [
    param("id").isMongoId().not().isEmpty().withMessage("ID must be informed!"),
    body("brand").isString().isLength({ min: 1, max: 20 }).withMessage("Brand must be 3 to 20 characters long!"),
    body("model").isString().not().isEmpty().withMessage("Model must be informed!"),
    body("version").isString().not().isEmpty().withMessage("Version must be informed!"),
    body("year").isNumeric().not().isEmpty().withMessage("Year must be informed!"),
    body("traveled_kilometer").isNumeric().not().isEmpty().withMessage("KM must be informed!"),
    body("gearshift").isString().not().isEmpty().withMessage("gearshift must be informed!"),
    body("sale_price").isNumeric().not().isEmpty().withMessage("Sale price must be informed!"),
]

exports.carCreateValidator = [
    body("brand").isString().isLength({ min: 1, max: 20 }).withMessage("Brand must be 3 to 20 characters long!"),
    body("model").isString().not().isEmpty().withMessage("Model must be informed!"),
    body("version").isString().not().isEmpty().withMessage("Version must be informed!"),
    body("year").isNumeric().not().isEmpty().withMessage("Year must be informed!"),
    body("traveled_kilometer").isNumeric().not().isEmpty().withMessage("KM must be informed!"),
    body("gearshift").isString().not().isEmpty().withMessage("gearshift must be informed!"),
    body("sale_price").isNumeric().not().isEmpty().withMessage("Sale price must be informed!"),
]

exports.carFindByIdValidator = [
    param("id").isMongoId().not().isEmpty().withMessage("ID must be informed!"),

]