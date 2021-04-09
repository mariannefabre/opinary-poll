const assert = require('assert');
const Answer = require('../poll.js');

describe('Answer', () => {
  it("returns a button in a list item with a value of its first argument", ()=>{
    // Setup
    const answer = "first option";
    const id = 1;
    const expected = '<li><button class="answer-button" data-id="1">first option</button></li>';

    // Exercise
    const result = Answer(answer, id);
  
    // Verify
    assert.strictEqual(result, expected);
  });
})