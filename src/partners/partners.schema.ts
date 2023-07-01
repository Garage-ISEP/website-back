import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PartnersDocument = HydratedDocument<Partners>;

@Schema()
export class Partners {
  @Prop({ required: true })
  image: Buffer;

  @Prop({ required: false })
  alt: string;
}

export const PartnersSchema = SchemaFactory.createForClass(Partners);
