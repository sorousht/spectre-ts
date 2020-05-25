import { States } from './state';
import { Channel } from './channel';
import { Ocr } from './ocr';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Digitalization {
  @Field(type => ID)
  _id: string;

  @Field(type => Int, { description: 'A unique number', deprecationReason: 'Use sequenceNumber instead' })
  sequenceId: Number;

  @Field({ description: 'The current state of the digitalization' })
  state: States;
  
  @Field({ description: 'The channel through which the digitalization has been imported' })
  channel: Channel;
  
  @Field({ nullable: true, description: 'The result of OCR robot' })
  ocr?: Ocr;
}
