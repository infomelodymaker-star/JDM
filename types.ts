
export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  price: number;
  grade: string;
  imageUrl: string;
  mileage: number;
  engine: string;
}

export interface FilterState {
  make: string;
  model: string;
  minPrice: string;
  maxPrice: string;
}
