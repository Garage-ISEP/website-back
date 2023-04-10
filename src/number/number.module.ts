import { Module } from '@nestjs/common';
import { NumberController } from './number.controller';
import { NumberService } from './number.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NumberGarage, NumberSchema } from './number.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NumberGarage.name, schema: NumberSchema },
    ]),
  ],
  controllers: [NumberController],
  providers: [NumberService],
})
export class NumberModule {}
