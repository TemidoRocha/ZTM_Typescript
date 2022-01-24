/**
 *
 * Interface
 * Creates a new type, describing the property names and values types of an object
 */

interface Reportable {
  summary(): string;
}

// we can additional properties on oldCivic, TS will not check that.
// TS only checks if the object has at least the properties  from the interface
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const coke = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

/**
 * we can use an interface to describe two diferent objects
 * We have diferent objects that needs to satisfy the interface to use the function
 */
printSummary(oldCivic);
printSummary(coke);
