import { IRegion } from 'app/shared/model/region.model';

export interface ICountry {
  id?: number;
  tentantId?: string;
  countryName?: string;
  region?: IRegion;
}

export class Country implements ICountry {
  constructor(public id?: number, public tentantId?: string, public countryName?: string, public region?: IRegion) {}
}
