import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

// Config files
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import cloudinaryConfig from './config/cloudinary.config';
import mailConfig from './config/mail.config';
import envValidation from './config/env.validation';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
    
    // config files load
    load : [appConfig, jwtConfig, databaseConfig, cloudinaryConfig, mailConfig],

    // env validation object
    validationSchema : envValidation,
    validationOptions : {allowUnknown : true, abortEarly : false}
  })],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
