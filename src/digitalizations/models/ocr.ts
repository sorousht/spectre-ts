import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class Ocr {
  @Field()
  wasSuccessful: boolean;

  @Field()
  finishedBy: string;

  @Field()
  finishedAt: Date;
};
