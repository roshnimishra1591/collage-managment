import { config } from "dotenv"
 config()


 export let  dbconfig ={
    dbUrl:process.env.dbUrl,
    dbName:"student"
}

export const userRole = {
    ADMIN:"admin",
    STUDENTS:"students"
}