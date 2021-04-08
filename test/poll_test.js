const assert = require('assert');
const Answer = require('../poll.js');

describe('Answer', () => {
  it("returns its arguments as a button list item", ()=>{
    // Setup
    const answer = "first option";
    const id = 1;
    const expected = '<li><button data-id="1">first option</button></li>';

    // Exercise
    const result = Answer(answer, id);
  
    // Verify
    assert.equal(result, expected);
  });
})