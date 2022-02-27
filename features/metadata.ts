import 'reflect-metadata';

const plane = {
  color: 'red',
};

// associate this property with the color property
Reflect.defineMetadata('note', 'object', plane);
const note = Reflect.getMetadata('note', plane);

// associate this property with the color property
Reflect.defineMetadata('note', 'hi object property color', plane, 'color');
const color = Reflect.getMetadata('note', plane, 'color');

console.log(note);
console.log(color);

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.defineMetadata('path', target.prototype, key);
    console.log(path);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
