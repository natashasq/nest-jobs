/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  title: string;

  @Prop()
  location: string;

  @Prop({ type: Object })
  email: string;

  @Prop({ type: Object })
  phone?: string;

  @Prop({ type: Object })
  linkedIn?: string;

  @Prop()
  about?: string;

  @Prop({ type: Object })
  open_for: string[];

  @Prop({ type: Object })
  skills: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
