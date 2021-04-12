function initPoll(domElement, poll) {
  let state = {
    hasVoted: false,
    voteId: null,
  };

  // Check if an element with `data-poll-id=poll.id` exists
  const existingPoll = document.querySelector(`[data-poll-id=${poll.id}]`);
  if (existingPoll) {
    throw new Error("Can't display the same poll twice.");
  }

  function render() {
    if (state.hasVoted) {
      renderPollWithVotes();
    } else {
      renderPoll();
    }
  }

  function renderPoll() {
    const answers = poll.answers
      .map((answer, index) => OpinaryAnswer(answer, index))
      .join("");
    domElement.innerHTML = `
    <div data-poll-id="${poll.id}" class="poll">
      <p class="poll-question">${poll.question}</p> 
      <ul class="nobullets">${answers}</ul>
    </div>
`;
  }

  function renderPollWithVotes() {
    const votes = getVotes(poll);
    const answersWithVotes = poll.answers
      .map((answer, index) => {
        return OpinaryAnswerWithVotes(
          answer,
          index,
          votes[index],
          state.voteId
        );
      })
      .join("");
    domElement.innerHTML = `
      <div data-poll-id="${poll.id}" class="poll">
        <p class="poll-question">${poll.question}</p> 
        <ul class="nobullets">${answersWithVotes}</ul>
      </div>`;
  }

  render();

  const handler = (e) => {
    if (e.target.matches("button")) {
      saveVote(poll, e.target.dataset.id); // save vote in localStorage
      state.hasVoted = true;
      state.voteId = parseInt(e.target.dataset.id);
      render();
      domElement.removeEventListener("click", handler);
    }
  };
  domElement.addEventListener("click", handler);
}

function OpinaryAnswer(answer, id) {
  return `
  <li>
    <button class="btn-poll-answer" data-id="${id}">${answer}</button>
  </li>`;
}

function OpinaryAnswerWithVotes(answer, id, nbVotes, voteId) {
  const renderedVotes = nbVotes > 1 ? `${nbVotes} votes` : `${nbVotes} vote`;
  const classNames = id === voteId ? "poll-result voted" : "poll-result";
  return `
    <li>
      <button class="${classNames}">
        <span>${answer}</span>
        <span class="fade-in">${renderedVotes}</span>
      </button>
    </li>`;
}

function saveVote(poll, answerId) {
  let currentVotes = [];
  try {
    currentVotes = getVotes(poll);
    const serializedAnswers = JSON.stringify({
      ...currentVotes,
      [answerId]: currentVotes[answerId] + 1,
    });
    localStorage.setItem(`votes-${poll.id}`, serializedAnswers);
  } catch (error) {
    console.log(error);
  }
}

function getVotes(poll) {
  try {
    let votes = JSON.parse(localStorage.getItem(`votes-${poll.id}`));
    if (votes === null) {
      votes = {};
      for (let i = 0; i < poll.answers.length; i++) {
        votes[i] = 0;
      }
    }
    return votes;
  } catch (error) {
    console.log(error);
  }
}

if (typeof exports !== "undefined") {
  exports.Answer = OpinaryAnswer;
  exports.AnswerWithVotes = OpinaryAnswerWithVotes;
}
