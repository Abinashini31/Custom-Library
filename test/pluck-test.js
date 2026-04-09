import { pluck } from '../src/Extraction/pluck.js';

console.log('Running Pluck Tests...');
runPluckTests();

export function runPluckTests() {
  const data = [
    { id: 1, info: { email: 'v@test.com' }, tags: ['dev'] },
    { id: 2, info: { email: 'a@test.com' }, tags: ['hr'] }
  ];

  console.log('Test 1: pluck id');
  console.log(pluck('id', data));

  console.log('Test 2: pluck info.email');
  console.log(pluck('info.email', data));

  console.log('Test 3: pluck multiple keys');
  console.log(pluck(['id', 'tags'], data));

  console.log('Test 4: pluck nested keys');
  console.log(pluck(['id', 'info.email'], data));


}