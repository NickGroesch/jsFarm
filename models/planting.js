const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantingSchema = new Schema({
    plot: { type: Schema.Types.ObjectId, ref: 'Plot' },
    weather: [{ type: Schema.Types.ObjectId, ref: 'Weather' }],
    seed: { type: Schema.Types.ObjectId, ref: 'Seed' },
    //seedling: { type: Schema.Types.ObjectId, ref: 'Plot'}//TODO: Define seedling
    plantingDate: { type: Date, default: Date.now }
});

const Planting = mongoose.model("Planting", plantingSchema);

module.exports = Planting;