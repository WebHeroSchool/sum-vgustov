const sum = require('./sum');

test('2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('4 + 1 = 5', () => {
  expect(sum(4, 1)).toBe(5);
});

test('1 + 11 = 12', () => {
  expect(sum(1, 11)).toBe(12);
});

test('3 + 18 = 21', () => {
  expect(sum(3, 18)).toBe(21);
});
