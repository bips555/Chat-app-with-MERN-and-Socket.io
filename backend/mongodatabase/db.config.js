import mongoose from "mongoose";
 const connectdb = async ()=>
{
try
{
await mongoose.connect(process.env.MONGODB_URL);
console.log("Connected to MONGODB database");
}
catch(error)
{
    console.log("Error connecting to MONGODB",error.message);
}
}
export default connectdb;