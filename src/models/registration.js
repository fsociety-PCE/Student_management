const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Timestamp: String,
    Name: String,
    Email: String,
    Branch: String,
    PhoneNumber: String,
    Batch: String,
    RegistrationNumber: String,
    Events: String,
});

// Create a Mongoose model
const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
