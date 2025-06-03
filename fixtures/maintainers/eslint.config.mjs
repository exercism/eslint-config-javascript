import config from '../../maintainers.mjs';

const [rules, ...rest] = config;

export default [
  {
    ...rules,
    files: ['*.{js,mjs,cjs}*'],
  },
  ...rest,
];
