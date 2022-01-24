import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();
console.log(user);
customMap.addMarker(user);
customMap.addMarker(company);
