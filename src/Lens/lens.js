import { map, filter } from './src';

const nums = [1, 2, 3];
const doubled = map(x => x * 2, nums);
console.log(doubled); // [2,4,6]

const users = [
  { name: 'Vishnu', active: true },
  { name: 'Guest', active: false }
];

const activeUsers = filter(u => u.active, users);
console.log(activeUsers);