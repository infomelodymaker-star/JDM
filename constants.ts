
import { Vehicle } from './types';

export const INVENTORY: Vehicle[] = [
  {
    id: '1',
    year: 2022,
    make: 'Toyota',
    model: 'Land Cruiser 300 GR Sport',
    price: 125000,
    grade: '5.0',
    imageUrl: 'https://images.unsplash.com/photo-1594563703937-fdc640497dcd?auto=format&fit=crop&q=80&w=800',
    mileage: 1200,
    engine: '3.5L V6 Twin-Turbo'
  },
  {
    id: '2',
    year: 1999,
    make: 'Nissan',
    model: 'Skyline GT-R R34 V-Spec',
    price: 320000,
    grade: '4.5',
    imageUrl: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800',
    mileage: 45000,
    engine: 'RB26DETT'
  },
  {
    id: '3',
    year: 1997,
    make: 'Toyota',
    model: 'Supra RZ (JZA80)',
    price: 185000,
    grade: '4.0',
    imageUrl: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=800',
    mileage: 62000,
    engine: '2JZ-GTE'
  },
  {
    id: '4',
    year: 2023,
    make: 'Nissan',
    model: 'Z Performance',
    price: 65000,
    grade: 'S',
    imageUrl: 'https://images.unsplash.com/photo-1662031121021-d89007e0569f?auto=format&fit=crop&q=80&w=800',
    mileage: 100,
    engine: '3.0L V6 Twin-Turbo'
  },
  {
    id: '5',
    year: 2002,
    make: 'Mazda',
    model: 'RX-7 Spirit R Type A',
    price: 155000,
    grade: '4.5',
    imageUrl: 'https://images.unsplash.com/photo-1605030466181-4209df956555?auto=format&fit=crop&q=80&w=800',
    mileage: 28000,
    engine: '13B-REW Rotary'
  },
  {
    id: '6',
    year: 1995,
    make: 'Honda',
    model: 'NSX-R',
    price: 295000,
    grade: '4.5',
    imageUrl: 'https://images.unsplash.com/photo-1592853293961-452c9f453021?auto=format&fit=crop&q=80&w=800',
    mileage: 34000,
    engine: '3.0L VTEC V6'
  }
];

export const MAKES = ['All Makes', 'Toyota', 'Nissan', 'Honda', 'Mazda', 'Subaru'];
export const MODELS = ['All Models', 'Land Cruiser', 'Skyline', 'Supra', 'NSX', 'RX-7', 'Z'];
export const PRICE_RANGES = ['Any Price', '0 - 50k', '50k - 100k', '100k - 200k', '200k+'];
