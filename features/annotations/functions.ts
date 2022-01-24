// there is type inference only for the return value and not for the arguments
const add = (a: number, b: number): number => {
  return a + b;
};

// arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  /**
   * tecnically a void function can return null and undefined
   */
};

const throwError = (message: string): never => {
  // never is used to say we will never get to the end
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
