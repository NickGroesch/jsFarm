const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantingSchema = new Schema({
    bed: { type: Number },//e.g. Tractor Till Row
    plotStarts: { type: Number },// Feet
    plotEnds: { type: Number },// Feet
});

const Planting = mongoose.model("Plot", plantingSchema);

module.exports = Planting;