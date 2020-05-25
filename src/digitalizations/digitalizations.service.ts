import { Injectable } from '@nestjs/common';

import { Digitalization } from './models/digitalization.model';

const digitalizations: Digitalization[] = [
  {
    _id: '1',
    sequenceId: 1,
    channel: 'broker_portal',
    state: 'assigned',
  },
  {
    _id: '2',
    channel: 'customer_upload',
    sequenceId: 2,
    state: 'categorized',
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
