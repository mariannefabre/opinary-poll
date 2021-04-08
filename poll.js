function initPoll(element, options) {
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
    const answers = options.answers
      .map((answer, index) => Answer(answer, index))
      .join("");
    element.innerHTML = `
    <h2>${options.question}</h2> 
    <ul>${answers}</ul>
`;
  }
  function renderVotes() {
    element.innerHTML = "votes";
    // reduce()
  }
  render();
  element.addEventListener("click", (event) => {
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