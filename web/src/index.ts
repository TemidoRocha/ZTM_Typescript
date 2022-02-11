import { User } from './models/User';

const user = new User({ name: 'new record', age: 20 });

console.log(user.get('name'));

user.on('change', () => console.log('user changed'));
user.trigger('change');
