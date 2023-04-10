import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumberModule } from './number/number.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NumberModule,
    MongooseModule.forRoot(
      'mongodb+srv://' +
        process.env.DB_USERNAME +
        ':' +
        process.env.DB_PASSWORD +
        '@cluster0.zm0mm5r.mongodb.net/garage-web-db?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
