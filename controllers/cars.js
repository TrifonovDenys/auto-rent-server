import Car from "../models/cars";

const getAll = async ( req, res ) =>{

    const { page = 1, limit = 12} = req.query;
    const skip = (page - 1) * limit;
    res.status(200).json(contacts);
}