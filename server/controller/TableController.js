const Table = require('../model/TableModel');

const TableController = {
    getAllTables:async function (req, res) {
        try {
            const tables =await Table.find();
            res.status(200).json(tables);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Something Went Wrong!"
            });
        }
    }
}

module.exports=TableController;
