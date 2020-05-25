import { Resolver, Query } from '@nestjs/graphql';
import { Digitalization } from './models/digitalization.model';
import { DigitalizationsService } from './digitalizations.service';

@Resolver(of => Digitalization)
export class DigitalizationsResolver {
  constructor(private readonly service: DigitalizationsService) {}
  @Query(returns => [Digitalization])
  digitalizations(): Promise<Digitalization[]> {
    return this.service.getAll();
  }
}
