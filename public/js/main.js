const jokeText = document.getElementById("jokeText");
const newQuoteBtn = document.getElementById("new-quote");
const jokeTypeSelect = document.getElementById("joke-type");
const quoteBox = document.getElementById("quote-box");

const jokes = {
  short: [
    "Why don’t programmers like nature? Too many bugs.",
    "Why did the computer sneeze? It caught a virus.",
    "Why was the JS dev sad? Because he didn’t know how to null his feelings."
  ],
  long: [
    "Why did the developer go broke? Because he used up all his cache and couldn’t recover his assets.",
    "A programmer orders 1.000000119 beers. The bartender says, 'You think you’re funny?' The programmer says, 'No, I’m testing floating point precision.'"
  ]
};

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function getRandomJoke(type) {
  const list = jokes[type];
  return list[Math.floor(Math.random() * list.length)];
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function renderJoke() {
  const type = jokeTypeSelect.value;
  const color = getRandomColor();

  jokeText.textContent = getRandomJoke(type);
  document.body.style.backgroundColor = color;
  quoteBox.style.color = color;
  newQuoteBtn.style.backgroundColor = color;
  jokeTypeSelect.style.backgroundColor = color;
}

newQuoteBtn.addEventListener("click", renderJoke);
jokeTypeSelect.addEventListener("change", renderJoke);
