import { sum } from './sum.js';

export function main() {
  return sum(2, 3);
}

if (import.meta.main) {
  console.log('Sum(2,3) =', main());
}
