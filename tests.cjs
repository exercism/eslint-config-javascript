const path = require('node:path');
const assert = require('node:assert/strict');
const { exit } = require('node:process');

const { ESLint } = require('eslint');

void (async function run() {
  // regular config
  {
    const configEslint = new ESLint({
      cwd: path.resolve(__dirname, 'fixtures', 'config'),
    });

    const passing = await configEslint.lintFiles(['passing.mjs']);
    assert(passing.length === 1, 'Expected one file to match');
    assert(
      passing[0].errorCount + passing[0].warningCount === 0,
      `Expected no errors and no warnings, actual: errors: ${passing[0].errorCount}, warnings: ${passing[0].warningCount}`,
    );

    const failing = await configEslint.lintFiles(['failing.mjs']);
    assert(failing.length === 1, 'Expected one file to match');
    assert(
      failing[0].errorCount + failing[0].warningCount !== 0,
      `Expected errors or warnings, actual: errors: ${failing[0].errorCount}, warnings: ${failing[0].warningCount}`,
    );
  }

  // maintainers config
  {
    const maintainersEslint = new ESLint({
      cwd: path.resolve(__dirname, 'fixtures', 'maintainers'),
    });

    const passing = await maintainersEslint.lintFiles(['passing.mjs']);
    assert(passing.length === 1, 'Expected one file to match');
    assert(
      passing[0].errorCount + passing[0].warningCount === 0,
      `Expected no errors and no warnings, actual: errors: ${passing[0].errorCount}, warnings: ${passing[0].warningCount}`,
    );

    const failing = await maintainersEslint.lintFiles(['failing.mjs']);
    assert(failing.length === 1, 'Expected one file to match');
    assert(
      failing[0].errorCount + failing[0].warningCount !== 0,
      `Expected errors or warnings, actual: errors: ${failing[0].errorCount}, warnings: ${failing[0].warningCount}`,
    );
  }
})().catch((error) => {
  console.error(error);

  exit(-1);
});
