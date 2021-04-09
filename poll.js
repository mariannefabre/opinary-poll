exports.id = 'poll';

function initPoll(domElement, poll) {
  let state = {
    hasVoted: false,
  };
  function render() {
    if (state.hasVoted) {
      renderPollWithVotes();
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
<<<<<<< HEAD
    <ul class="nobullets">${answers}</ul>
`;
  }
  function renderPollWithVotes() {
    const votes = getVotes();
    const answersWithVotes = poll.answers
      .map((answer, index) => {
        const nbOccurences = votes.reduce((a, v) => (parseInt(v)===index ? a+1 : a), 0); 
        return AnswerWithVotes(answer, index, nbOccurences) 
      }).join("");
      domElement.innerHTML = `
    <h2>${poll.question}</h2> 
    <ul class="nobullets">${answersWithVotes}</ul>
`;
=======
    <ul>${answers}</ul>
`;
  }
  function renderVotes() {
    domElement.innerHTML = "votes";
    // reduce()
>>>>>>> 0a7f9ac06c3a32121665c96a2861aad716107a8d
  }

  render();
<<<<<<< HEAD

  const handler = (e) => {
    if (e.target.matches("button")) {
      vote(e.target.dataset.id);      // save vote in localStorage
=======
  domElement.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
      vote(event.target.dataset.id);
>>>>>>> 0a7f9ac06c3a32121665c96a2861aad716107a8d
      state.hasVoted = true;
      render();
      domElement.removeEventListener("click", handler);
    }
  }
  domElement.addEventListener("click", handler);
}

function Answer(answer, id) {
  return `<li><button class="answer-button" data-id="${id}">${answer}</button></li>`;
}
function AnswerWithVotes(answer, id, nbVotes) {
  return `<li><button class="answer-button" data-id="${id}">${answer}${nbVotes}</button></li>`;
}

function vote(answerId) {
  let current = [];
  try {
    current = getVotes();
    const serializedAnswers = JSON.stringify([...current, answerId]);
    localStorage.setItem("votes", serializedAnswers);
  } catch (error) {
    console.log(error);
  }
}
<<<<<<< HEAD
function getVotes(){
  try{
    let votes = JSON.parse(localStorage.getItem("votes"));
    if (votes === null) {
      votes = [];
    }
    return votes;
  }catch(error){
    console.log(error);
  }
}
=======
>>>>>>> 0a7f9ac06c3a32121665c96a2861aad716107a8d

module.exports = Answer;