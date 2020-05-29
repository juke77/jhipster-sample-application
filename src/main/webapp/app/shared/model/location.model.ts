import { ICountry } from 'app/shared/model/country.model';

export interface ILocation {
  id?: number;
  tentantId?: string;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  stateProvince?: string;
  country?: ICountry;
}

export class Location implements ILocation {
  constructor(
    public id?: number,
    public tentantId?: string,
    public streetAddress?: string,
    public postalCode?: string,
    public city?: string,
    public stateProvince?: string,
    public country?: ICountry
  ) {}
}
