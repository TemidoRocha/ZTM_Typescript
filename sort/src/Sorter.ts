interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

/**
 * ABSTRACT CLASS
 *
 * 1. Cannot be used to create an object directly
 * 2. Only used as a parent class
 * 3. Can contain real implemetation for same methods
 * 4. The implemented methods can refer to other methods that don't actually exits yet
 * ( we still have to provide names and types for the un-implemented methods)
 * 5. Can make child classes promise to implement some otehr methods
 */

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
