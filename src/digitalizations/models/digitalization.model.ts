import { States } from './state';
import { Channel } from './channel';
import { Ocr } from './ocr';

export class Digitalization {
  _id: string;
  sequenceId: Number;
  state: States;
  channel: Channel;
  ocr?: Ocr
}
