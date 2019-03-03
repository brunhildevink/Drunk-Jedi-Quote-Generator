
//arrays with quotes
const quoteFirst = [
  "Help me, Obi-Wan Kenobi.  ", "I find your lack of faith disturbing. ", "It’s the ship that made the Kessel run in less than twelve parsecs... ", "Never tell me the odds! ", "Do. Or do not. There is no try. ", "When gone am I, the last of the Jedi will you be... ", "I’ll never turn to the dark side! ", "Well, if droids could think... "
];
const quoteSecond = [
  "You’re my only hope! ", "I’ve outrun Imperial starships.. ", "Why, you stuck-up, half-witted, scruffy-looking nerf herder! ", "No. I am your father. ", "The Force runs strong in your family. Pass on what you have learned... ", "Obi-Wan Kenobi, you're my only hope... ", "You were my brother, Anakin. I loved you! ", "IT'S A TRAP! "
];
const quoteThird = [
  "Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man. ", "The Force will be with you, always. ", "Bigger than the Millennium Falcon! ", "Now, young Skywalker, you will die! ", "There’s always a bigger fish...", "I think he is a she, and I think she's a changeling. ", "Power! Unlimited P O W E R! ", "So this is how liberty dies. "
];
const quoteFourth = [
  "You are the chosen one.", "You have brought balance to this world.", "Stay on this path, and you will do it again for the galaxy.", "Chewie, we’re home.", "You know, no matter how much we fought, I’ve always hated watching you leave.", "Oh, my dear friend. How I’ve missed you...", "I’m one with the Force. The Force is with me.", "Hope."
];

// returns random word
function getRandomWord(line) {
  return line[Math.floor(Math.random() * line.length)];
}

// generates the quote
function generateQuotes(quotes) {
  const selectedAmount = getSelectedAmount();
  const html = document.getElementById("quotes");
  html.innerHTML = "";
  for(let i = 0; i < selectedAmount; i++)
    generateQuote(quotes, html);
}

function generateQuote(quotes, html) {
  let totalString = "";
  for(let i = 0; i < quotes.length; i++)
    totalString += getRandomWord(quotes[i]);

  html.innerHTML += `<div class="singleQuote">${totalString}</div>`;
}

function getSelectedAmount() {
  const selector = document.querySelector('#selectForm');
  return selector[selector.selectedIndex].value;
}

// returns the drunk value
function getSelectedValueDrunk() {
  const selector = document.querySelector('#selectFormDrunkness');
  return selector[selector.selectedIndex].value;
}

// event listeners
document.getElementById("quoteBtn").addEventListener("click", function(event){
  event.preventDefault();

  const value = getSelectedValueDrunk();

  // instead of an if statement, it makes the code more clean and easy to read
  switch(value) {
    case "drunk":
      generateQuotes([quoteFirst, quoteSecond]);
      break;
    case "extradrunk":
      generateQuotes([quoteFirst, quoteSecond, quoteThird]);
      break;
    case "wasted":
      generateQuotes([quoteFirst, quoteSecond, quoteThird, quoteFourth]);
      break;
  }
});
