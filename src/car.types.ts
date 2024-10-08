export interface Car {
  MakeId: number;
  MakeName: string;
  Make_ID: number;
  Make_Name: string;
  Model_Name: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface Vehicles {
  Count: number;
  Message: string;
  Results: Car[];
  SearchCriteria: string;
}
