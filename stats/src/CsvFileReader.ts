/**
 * even for node js we need to install the type definition files
 * for any library inside node we have only one type definition file
 * npm i @types/nodes
 */
import fs from 'fs';

/**
 * Generics
 * 1. Like function arguments, but for types in class/function definitions
 * 2. Allows us to define the type of a preperty/argument/return value at a future point
 * 3. Used heavily when writing reusable code
 */
export abstract class CsvFileReader<T> {
  abstract mapRow(row: string[]): T;
  data: T[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
