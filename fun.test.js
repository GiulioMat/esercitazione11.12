const fun = require('./fun');

test('if is string return square of lenght', () => {
  expect(fun('test')).toBe(16);
});

test('if is not string return -1', () => {
    expect(fun(123)).toBe(-1);
  });