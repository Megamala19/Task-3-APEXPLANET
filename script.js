// Image Carousel
const images = [
  "https://via.placeholder.com/400x200?text=First+Image",
  "https://via.placeholder.com/400x200?text=Second+Image",
  "https://via.placeholder.com/400x200?text=Third+Image"
];
let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("carouselImage").src = images[currentIndex];
}

// Quiz
function checkAnswer(answer) {
  const result = document.getElementById("quizResult");
  if (answer === 4) {
    result.textContent = "Correct! ";
    result.style.color = "green";
  } else {
    result.textContent = "Wrong. Try again!";
    result.style.color = "red";
  }
}

// Fetch API (Joke)
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Failed to fetch joke.";
    });
}