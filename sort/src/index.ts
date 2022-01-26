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
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XfqocUIOGhow');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(53);
linkedList.add(6540);
linkedList.add(-5);
linkedList.add(-450);

linkedList.sort();
linkedList.print();
