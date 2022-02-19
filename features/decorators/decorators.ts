@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedCollor(): string {
    return `this boats color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  pilot(@paramterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('notihng');
    }
  }
}

// Descorator factory
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function paramterDecorator(target: any, key: string, index: number) {
  console.log(key);
  console.log(index);
}
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
