/**
 * tsc -w => will watch for updates and compile the TS into JS
 *
 * concurrently will help the compilation and serving
 */

/**
 * bubble sort
 */
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([-10000, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xfqochow');
const _sort = new Sorter(charactersCollection);
_sort.sort();
console.log(charactersCollection.data);
