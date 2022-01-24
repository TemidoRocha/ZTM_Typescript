/**
 * Tuples
 *
 * Array-like structure where each element represents some property of a record
 */
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// it the notation that differs the array from the tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias (this is a good place to use type alias)
type Drink = [string, boolean, number];
const cocaCola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

pepsi[2] = 40;
pepsi[0] = 'brown';

// tuples are not very understandable for inportant info. bellow it is not immediatly obvious the meaning of the numebers
const carSpecs: [number, number] = [400, 3354];

// similar situation as an object wich are very clear
const carSatts = {
  horsepower: 400,
  weight: 3354,
};
