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

const numbersCollection = new NumbersCollection([-10000, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xfqochow');
const _sort = new Sorter(charactersCollection);
_sort.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(53);
linkedList.add(-450);
linkedList.add(-5);
linkedList.add(6540);

const __sorter = new Sorter(linkedList);
__sorter.sort();
linkedList.print();
