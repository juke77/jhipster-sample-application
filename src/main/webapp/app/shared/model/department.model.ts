import { ILocation } from 'app/shared/model/location.model';
import { IEmployee } from 'app/shared/model/employee.model';

export interface IDepartment {
  id?: number;
  tentantId?: string;
  departmentName?: string;
  location?: ILocation;
  employees?: IEmployee[];
}

export class Department implements IDepartment {
  constructor(
    public id?: number,
    public tentantId?: string,
    public departmentName?: string,
    public location?: ILocation,
    public employees?: IEmployee[]
  ) {}
}
