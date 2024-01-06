let mongoose = require('mongoose');

const BookingSchema = mongoose.Schema(
    {
        "date": {
            type: Date,
            required: true
        },
        "time": {
            type: String,
            required: true
        },
        "name": {
            type: String,
            required: true
        },
        "nic": {
            type: String,
            required: true
        },
        "contact": {
            type: String,
            required: true
        }
    }
);

const TableModel = mongoose.Schema(
    {
        "table_id": {
            require: true,
            unique: true,
            type: String,
            index: true
        },
        "table_number": {
            require: true,
            type: Number,
        },
        "booking": {
            type: [BookingSchema]
        }
    }
)

let Table = mongoose.model('Table', TableModel);
module.exports = Table