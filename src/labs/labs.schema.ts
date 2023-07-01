import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LabDocument = HydratedDocument<Lab>;

@Schema()
export class Lab {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: Buffer;

  @Prop({ required: false })
  description: string;
}

export const LabSchema = SchemaFactory.createForClass(Lab);
