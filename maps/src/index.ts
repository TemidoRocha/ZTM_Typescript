import { User } from './User';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
const user = new User();
console.log(user);
customMap.addUserMarker(user);
