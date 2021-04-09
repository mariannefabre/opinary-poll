exports.id = 'poll';

function initPoll(domElement, poll) {
  let state = {
    hasVoted: false,
    voteId: null,
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
    <p class="question">${poll.question}</p> 
    <ul class="nobullets">${answers}</ul>
`;
  }
  function renderPollWithVotes() {
    const votes = getVotes();
    const answersWithVotes = poll.answers
      .map((answer, index) => {
        const nbOccurences = votes.reduce((a, v) => (v===index ? a+1 : a), 0); 
        return AnswerWithVotes(answer, index, nbOccurences, state.voteId) 
      }).join("");
      domElement.innerHTML = `
    <p class="question">${poll.question}</p> 
    <ul class="nobullets">${answersWithVotes}</ul>
`;
  }

  render();

  const handler = (e) => {
    if (e.target.matches("button")) {
      vote(e.target.dataset.id);      // save vote in localStorage
      state.hasVoted = true;
      state.voteId = parseInt(e.target.dataset.id);
      render();
      domElement.removeEventListener("click", handler);
    }
  }
  domElement.addEventListener("click", handler);
}

function Answer(answer, id) {
  return `<li><button class="answer-button" data-id="${id}">${answer}</button></li>`;
}
function AnswerWithVotes(answer, id, nbVotes, voteId) {
  if(id===voteId){
    return `<li><div class="answer-wrapper selected"><span>${answer}</span><span>${nbVotes} votes</span></div></li>`;
  }else{
    return `<li><div class="answer-wrapper"><span>${answer}</span><span>${nbVotes} votes</span></div></li>`;
  }
  
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
function getVotes(){
  try{
    let votes = JSON.parse(localStorage.getItem("votes"));
    if (votes === null) {
      return [];
    }
    return votes.map(vote => parseInt(vote));
  }catch(error){
    console.log(error);
  }
}

module.exports = Answer;