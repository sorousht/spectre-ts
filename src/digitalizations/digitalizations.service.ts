import { Injectable } from '@nestjs/common';

import { Digitalization } from './models/digitalization.model';
import { States } from './models/state';
import { Channel } from './models/channel';

const digitalizations: Digitalization[] = [
  {
    _id: '1',
    sequenceId: 1,
    channel: Channel.broker_portal,
    state: States.assigned,
  },
  {
    _id: '2',
    channel: Channel.customer_upload,
    sequenceId: 2,
    state: States.categorized,
    ocr: {
      finishedAt: new Date(),
      finishedBy: 'unknown',
      wasSuccessful: true,
    },
  },
];

@Injectable()
export class DigitalizationsService {
  async getAll(): Promise<Digitalization[]> {
    return digitalizations;
  }
}
