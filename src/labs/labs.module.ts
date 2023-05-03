import { Module } from '@nestjs/common';
import { LabsController } from './labs.controller';
import { LabsService } from './labs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Lab, LabSchema } from './labs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Lab.name, schema: LabSchema }])],
  controllers: [LabsController],
  providers: [LabsService],
})
export class LabsModule {}
