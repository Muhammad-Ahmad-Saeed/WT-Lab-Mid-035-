const container = document.querySelector('.faq-container');
const questionInput = document.querySelector('.Qstext');
const answerInput = document.querySelector('.Anstext');

function toggleCard(card) {
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-chevron-down')) {
      card.classList.toggle('active');
    } else if (e.target.classList.contains('fa-times')) {
      container.removeChild(card);
    }
  });
}

function createCard(question, answer) {
  const card = document.createElement('div');
  card.classList.add('faq');

  const title = document.createElement('h3');
  title.classList.add('faq-title');
  title.textContent = question;

  const text = document.createElement('p');
  text.classList.add('faq-text');
  text.textContent = answer;

  const toggleButton = document.createElement('button');
  toggleButton.classList.add('faq-toggle');
  toggleButton.innerHTML = '<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';

  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(toggleButton);

  container.appendChild(card);
  toggleCard(card);
}

document.querySelectorAll('.faq').forEach((card) => {
  toggleCard(card);
});

document.querySelector('.submitbtn').addEventListener('click', () => {
  const question = questionInput.value;
  const answer = answerInput.value;

  if (question && answer) {
    createCard(question, answer);
    questionInput.value = '';
    answerInput.value = '';
  }
});
