const assert = require("assert");
const poll = require("../poll.js");

describe("Answer", () => {
  it("returns a button in a list item with a value of its first argument", () => {
    // Setup
    const answer = "first answer";
    const id = 1;
    const expected = `<li>
                        <button class="btn-poll-answer" data-id="1">first answer</button>
                      </li>`;

    // Exercise
    const result = poll.Answer(answer, id);

    // Verify
    assert.strictEqual(result.replace(/\s/g, ""), expected.replace(/\s/g, ""));
  });
});

describe("AnswerWithVotes", () => {
  it("returns a list item containing a button with the answer and its number of votes", () => {
    // Setup
    const answer = "first answer";
    const id = 1;
    const voteId = 2;
    const nbVotes = 3;
    const expected = `<li>
                        <button class="poll-result">
                          <span>first answer</span>
                          <span class="fade-in">3 votes</span>
                        </button>
                      </li>`;

    // Exercise
    const result = poll.AnswerWithVotes(answer, id, nbVotes, voteId);

    // Verify
    assert.strictEqual(result.replace(/\s/g, ""), expected.replace(/\s/g, ""));
  });
});

describe("AnswerWithVotes", () => {
  it("returns a list item containing a button with the answer, its number of votes and the 'voted' class", () => {
    // Setup
    const answer = "first answer";
    const id = 1;
    const voteId = 1;
    const nbVotes = 3;
    const expected = `<li>
                        <button class="poll-result voted">
                          <span>first answer</span>
                          <span class="fade-in">3 votes</span>
                        </button>
                      </li>`;

    // Exercise
    const result = poll.AnswerWithVotes(answer, id, nbVotes, voteId);

    // Verify
    assert.strictEqual(result.replace(/\s/g, ""), expected.replace(/\s/g, ""));
  });
});
