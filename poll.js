function initPoll(domElement, options) {

    function renderPoll() {
      const answers = options.answers
        .map((answer, index) => Answer(answer, index))
        .join("");
        domElement.innerHTML = `
      <h2>${options.question}</h2> 
      <ul>${answers}</ul>
  `;
    }
    renderPoll();
  }
  
  function Answer(answer, id) {
    return `<li><button data-id="${id}">${answer}</button></li>`;
  }

  