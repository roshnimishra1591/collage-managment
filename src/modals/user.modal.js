import mongoose from "mongoose";
import { userRole } from "../config/constants.js";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        min:3,
        max:50,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    },

    role:{
        type:String,
        enum:[userRole.ADMIN,userRole.STUDENTS],
        required:true 
    }
},

 {
    // configuration of table
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }

)

const User = mongoose.model('User',userSchema);
export default User;