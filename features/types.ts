const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {}

const red = new Color();

// type anotatins  is the type we specify for TS
// type inference is the way TS tries to figure out what type the var is
// if declaration and initialization are on the same line, TS will figure out the type for us
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/**
 * when to use annotations
 * 1. Function that returns the 'any' type
 *
 */
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare a variabel on one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}
console.log(foundWord);

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let number of numbers) {
  if (number > 0) {
    numberAboveZero = number;
  }
}
