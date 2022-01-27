import fs from 'fs';
/**
 * even for node js we need to install the type definition files
 * for any library inside node we have only one type definition file
 * npm i @types/nodes
 */

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(','));

console.log(matches);
