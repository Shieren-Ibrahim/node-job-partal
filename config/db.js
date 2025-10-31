const mongoose= require("mongoose");
const colors=require("colors");

//function mongodb database connection
const connectDb=async()=>{
    try{
        console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Database ${mongoose.connection.host}`.bgCyan)
    }catch(error){
        console.log("DB Error",error)
    }
}

module.exports= connectDb;