import { Schema, model } from "mongoose";
import handleMongooseError from "../utils/handleMongoose";


const carSchema = new Schema({

})

carSchema.post("save", handleMongooseError)
const Car =  model("car", carSchema)
export default Car