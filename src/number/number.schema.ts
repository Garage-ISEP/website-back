import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NumberDocument = HydratedDocument<NumberGarage>;

@Schema()
export class NumberGarage {
  @Prop({ required: true })
  value: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description?: string;
}

export const NumberSchema = SchemaFactory.createForClass(NumberGarage);
