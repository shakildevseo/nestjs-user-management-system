import * as Joi from "joi"

export default Joi.object({
    // app port
    PORT : Joi.number().default(3000),

    // Environment Mode
    NODE_ENV : Joi.string()
                  .valid('development', 'production', 'test')
                  .default('development'),

  // database url
  DATABASE_URL : Joi.string().required(),


  // JWT SETTINGS 

//JWT_ACCESS_SECRET & JWT_REFRESH_SECRET:
JWT_ACCESS_SECRET : Joi.string().min(32).required(),
JWT_REFRESH_SECRET : Joi.string().min(32).required(),

  // access expiry default 15 mins (900 seconds)
  JWT_ACCESS_EXPIRY : Joi.number().default(900),
  JWT_REFRESH_EXPIRY : Joi.number().default(604800),

  
  // Mail Settings
  GMAIL_USER : Joi.string().email().required(),
  GMAIL_PASS : Joi.string().required(),

  // App URL & CORS
  APP_URL : Joi.string().default('http://localhost:3000'),

  // allowed origin
  ALLOWED_ORIGIN : Joi.string().default('http://localhost:3000')

})

