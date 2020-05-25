import { ApiProperty } from "@nestjs/swagger";

export class Ocr {
  @ApiProperty()
  wasSuccessful: boolean;

  @ApiProperty({ description: 'The service who did the OCR', example: 'ds-document-ocr' })
  finishedBy: string;

  @ApiProperty({})
  finishedAt: Date;
};
