import "dotenv/config";


export const TOKENSECRET = String(process.env.TOKEN_SECRET).trim()
export const ACCESSEXPIRE = String(process.env.ACCESS_EXPIRE).trim()
export const REFRESHEXPIRE = String(process.env.REFRESH_EXPIRE).trim()