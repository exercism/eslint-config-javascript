import config from '../../index.mjs';

const [rules, ...rest] = config;

export default [
  {
    ...rules,
    files: ['*.{js,mjs,cjs}*'],
  },
  ...rest,
];
