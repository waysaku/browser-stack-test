import assert from 'assert';
import { addNumber } from "../src/number-util";

describe('addNumber', function () {
  it('$BB-$7;;$G$-$k(B', function () {
    assert.equal(addNumber(1, 2), 3, '1 + 2 = 3');
    assert.equal(addNumber(10, -2), 8, '10 + -2 = 8');
  });
})
