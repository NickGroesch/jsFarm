const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    date: { type: Date, default: Date.now },
    measured: { type: Mixed }, //ICEBOX
    openWeatherMapAPI: { type: Mixed }//TODO
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;