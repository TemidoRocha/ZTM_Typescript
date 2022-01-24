// we use arrays any time we need to represent a collection of records with some arbitary sort order

const carMakers: string[] = ['ford', 'toyata', 'chevy'];

const dates = [new Date(), new Date()];

let carsByMake: string[][] = [];
carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const myCar = carMakers[0];
const yourCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // this will give an error

// Help with 'map'
carMakers.map((car: string): string => car.toUpperCase());

// Flexible types - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100);
