/**
 * even for node js we need to install the type definition files
 * for any library inside node we have only one type definition file
 * npm i @types/nodes
 */
import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
