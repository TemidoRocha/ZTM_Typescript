class Vehicle {
  /**
   * when creating a class we are creating a blueprint of what Vehicle shoudl be
   */

  // color: string;

  constructor(public color: string) {
    // this.color = color;
    // when using a modifier like above we don't need to refer the rest of the code
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  // if we don't define a constructor here, it will call automatically the parent construcot
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // we can override methods but we cannot change the modifier
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4, 'red');
car.startDrivingProcess();

/**
 * Modifiers
 *
 * public - this mthod can be called anywhere, any time
 *
 * private - this method can only be called by other methods in this class
 *
 * protected - this method can be called by other methods in this class, or by other methods in child classes
 */
