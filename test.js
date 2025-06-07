const assert = require('assert');

function add(a, b) {
  return a + b;
}

try {
  assert.strictEqual(add(2, 3), 5);
  console.log("Test passed!");
} catch (error) {
  console.error("Test failed!", error);
  process.exit(1);
}
