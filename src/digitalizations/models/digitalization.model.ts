import { States } from './state';
import { Channel } from './channel';
import { Ocr } from './ocr';
import { ApiProperty } from '@nestjs/swagger';

export class Digitalization {
  @ApiProperty()
  _id: string;

  @ApiProperty({ description: 'A unique number'})
  sequenceId: Number;

  @ApiProperty({ description: 'The current state of the digitalization', enum: States })
  state: States;

  @ApiProperty({ description: 'The channel through which the digitalization has been imported', enum: Channel })
  channel: Channel;

  @ApiProperty({ required: false })
  ocr?: Ocr
}
