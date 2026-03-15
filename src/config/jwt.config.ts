import {registerAs} from "@nestjs/config"

export default registerAs('jwt', ()=>({
  accessSecret : process.env.JWT_ACCESS_SECRET,
  refreshSecret : process.env.JWT_REFRESH_SECRET,

  accessExpiry : parseInt(process.env.JWT_ACCESS_EXPIRY || '900', 10),
  refreshExpiry : parseInt(process.env.JWT_REFRESH_EXPIRY || '604800', 10)
}))