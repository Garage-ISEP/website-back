import { Module } from '@nestjs/common';
import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Partners, PartnersSchema } from './partners.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Partners.name, schema: PartnersSchema },
    ]),
  ],
  controllers: [PartnersController],
  providers: [PartnersService],
})
export class PartnersModule {}
