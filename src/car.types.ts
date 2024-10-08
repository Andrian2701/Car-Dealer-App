export interface Car {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface Vehicles {
  Count: number;
  Message: string;
  Results: Car[];
  SearchCriteria: string;
}
