// https://eslint.org/docs/latest/rules/array-callback-return
[].forEach(function (item) {
  return item;
});

const _indexMap = [].reduce(function (memo, item, index) {
  memo[item] = index;
  return memo;
}, {});

const foo = Array.from([], function (node) {
  if (node.tagName === 'DIV') {
    return true;
  }
  return false;
});

const _bar = foo.map((node) => node.getAttribute('id'));

// Expect: no error
[].forEach(function (item) {
  return item;
});
