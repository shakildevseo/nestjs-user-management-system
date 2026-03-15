import { registerAs } from "@nestjs/config";

export default registerAs('database', ()=>({
    url : process.env.DATABASE_URL,
    host : process.env.DATABASE_HOST,
    port : parseInt(process.env.DATABASE_PORT || '3306', 10),
    user : process.env.DATABASE_USER || 'root',
    password : process.env.DATABASE_PASSWORD || "",
    name :process.env.DATABASE_NAME || 'test_db',
  connectionLimit: parseInt(process.env.DATABASE_POOL_LIMIT || '20', 10) 


}))