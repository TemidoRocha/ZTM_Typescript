import faker from '@faker-js/faker';
import { Mappable } from './CustomMap';

// in TS world it is not usual to use default n order to avoid errors when importing because we will avoid
// the problem of knowing if we use the curly braces
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
