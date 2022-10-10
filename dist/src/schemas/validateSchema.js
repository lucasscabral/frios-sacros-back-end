"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateSchema(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(422).send(error.details.map((e) => e.message).join(', '));
            return;
        }
        next();
    };
}
exports.default = validateSchema;
