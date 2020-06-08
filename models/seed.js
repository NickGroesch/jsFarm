const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seedSchema = new Schema({
    sunHours: { type: Number },
    plantingDepth: { type: Number, required: true },//inches
    spaceBetweenRows: { type: Number },//inches
    spacePlanting: { type: Number }, //inches
    spaceAfterThinning: { type: Number }, //inches
    daysToGermination: { type: Number },
    daysToHarvest: { type: Number },//also called daysToMaturity
    sowDates: [{//1=JAN
        startMonth: Number,
        endMonth: Number
    }],
    upcA: { type: Number },
    brand: { type: String },
});

const Seed = mongoose.model("Seed", seedSchema);

module.exports = Seed;