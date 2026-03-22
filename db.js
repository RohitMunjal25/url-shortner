const mongoose=require("mongoose");
const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongo db connected");
    }
    catch(error){
        console.log("database error",error);
    }
};
module.exports=connectdb;