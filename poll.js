exports.id = 'poll';

function initPoll(domElement, poll) {
  let state = {
    hasVoted: false,
  };
  function render() {
    if (state.hasVoted) {
      renderVotes();
    } else {
      renderPoll();
    }
  }
  function renderPoll() {
    const answers = poll.answers
      .map((answer, index) => Answer(answer, index))
      .join("");
      domElement.innerHTML = `
    <h2>${poll.question}</h2> 
    <ul>${answers}</ul>
`;
  }
  function renderVotes() {
    domElement.innerHTML = "votes";
    // reduce()
  }
  render();
  domElement.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
      vote(event.target.dataset.id);
      state.hasVoted = true;
      render();
    }
  });
}

function Answer(answer, id) {
  return `<li><button data-id="${id}">${answer}</button></li>`;
}

function vote(answerId) {
  let current = [];
  try {
    try {
      current = JSON.parse(localStorage.getItem("answers"));
    } catch (error) {
      console.log(error);
    }
    if (current === null) {
      current = [];
    }
    const serializedAnswers = JSON.stringify([...current, answerId]);
    localStorage.setItem("answers", serializedAnswers);
  } catch (error) {
    console.log(error);
  }
}

module.exports = Answer;