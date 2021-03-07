const mongoose = require('mongoose');

const trainShema = new mongoose.Schema({
model: String,
yearOfManufacturing: Number,
lastMaintenanceDate: Date,
isActive: Boolean
});

module.exports = mongoose.model('Train', trainShema);