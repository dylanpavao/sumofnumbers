/* E26 Four different ways to compute the sum of numbers
 * Created by Dildyl on 9/18/16.
 */

const testList = [1, 2, 3, 4, 5];

function sumFor(list) {
  let total = 0;
  for (const num of list) {
    total += num;
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i += 1;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function add(memo, num) { return memo + num; }, 0);
}

console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
