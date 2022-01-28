class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

/**
 * Generic is a way to pass a type as a parameter
 */
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// type inference
// TS will determine imediatly with the example bellow that arr is type string[]
const arr = new ArrayOfAnything(['a', 'b', 'c']);

// example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
// since TS wil make type inference we can do also do as bellow, but we should insert the type to TS help us find errors
printAnything(['a', 'b', 'c']);

/**
 * Generic Constrains
 */
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    // we need to tell TS that there wil allways be a print with a generic constrain
    arr[i].print();
  }
}

/**
 * this will give a n erro becaus it doesn't satusfy the printable
 * printHousesOrCars([1, 2, 3, 4]);
 */

printHousesOrCars([new Car(), new Car()]);
