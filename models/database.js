import mongoose,{Schema} from "mongoose";

const databaseSchema = new Schema(
    {
        username: String,
        email:String,
        dateofjoin:String,
        role:String
    },{
    timestamps:true}
)

const Database = mongoose.models.Database||mongoose.model("Database", databaseSchema)

export default Database