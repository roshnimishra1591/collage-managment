import mongoose from "mongoose";
import { dbconfig } from "./constants.js";

const dbInitialization = async ()=>{
    try{

       await mongoose.connect(dbconfig.dbUrl,{      // this mongoose.connect() returns us a promise so use are using the async await here 
            dbName:dbconfig.dbName,
            autoCreate:true,
            autoIndex:true
        });

        console.log("***********************db connection established sucessfully**************************")
    }catch(exception){
        console.log("**********************expection from the db connection**************");
        throw exception
    }
};


dbInitialization();