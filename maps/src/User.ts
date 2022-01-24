import faker from '@faker-js/faker';

// in TS world it is not usual to use default n order to avoid errors when importing because we will avoid
// the problem of knowing if we use the curly braces
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
