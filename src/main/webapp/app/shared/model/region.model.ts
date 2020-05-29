export interface IRegion {
  id?: number;
  tentantId?: string;
  regionName?: string;
}

export class Region implements IRegion {
  constructor(public id?: number, public tentantId?: string, public regionName?: string) {}
}
