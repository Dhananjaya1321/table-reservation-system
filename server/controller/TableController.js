const Table = require('../model/TableModel');

const TableController = {
    getAllTables: async function (req, res) {
        try {
            const tables = await Table.find();
            res.status(200).json(tables);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Something Went Wrong!"
            });
        }
    },

    saveTable: async function (req, res) {
        try {
            const tables = await Table.create(req.body);
            res.status(200).json(tables);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Something Went Wrong!"
            });
        }
    },

    deleteTable: async function (req, res) {
        try {
            console.log("s",req.params.table_id)
            const result = await Table.deleteOne({ table_id: req.params.table_id });

            if (result.deletedCount > 0) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: "Table not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Something Went Wrong!"
            });
        }
    },


    saveBooking:async function (req, res) {
        try {
            const { table_id, date, time, name, nic, contact, online_or_not } = req.body;

            const newBooking = {
                date: new Date(date),
                time: time,
                name: name,
                nic: nic,
                contact: contact,
                online_or_not: online_or_not,
            };
            console.log(newBooking)
            const result = await Table.updateOne(
                { table_id: table_id },
                { $push: { booking: newBooking } }
            );

            console.log("Booking added successfully:", result);
            res.status(200).json(newBooking);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Something Went Wrong!"
            });
        }
    }
}

module.exports = TableController;
