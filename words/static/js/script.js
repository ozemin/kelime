
// Get the list of words from the context variable passed in from Django
const words = {{ words|safe }};

// Initialize the index of the current word to 0
let currentWordIndex = 0;

// Get references to the HTML elements we will use to display the word and prompt the player for a guess
const wordDefinitionElement = document.getElementById('word-definition');
const letterBoxesElement = document.getElementById('letter-boxes');
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const nextButton = document.getElementById('next-button');

// Define a function to display the current word and its letter boxes
function displayCurrentWord() {
    // Get the current word and its definition from the list of words
    const currentWord = words[currentWordIndex].word;
    const currentDefinition = words[currentWordIndex].definition;
    
    // Display the current word definition
    wordDefinitionElement.textContent = currentDefinition;
    
    // Display the letter boxes for the current word
    letterBoxesElement.textContent = '';
    for (let i = 0; i < currentWord.length; i++) {
        letterBoxesElement.textContent += '_';
    }
}

// Define a function to handle when the player submits a guess
function handleGuess(event) {
    event.preventDefault();
    
    // Get the player's guess from the input field
    const guess = guessInput.value.toLowerCase();
    
    // Get the current word from the list of words
    const currentWord = words[currentWordIndex].word;
    
    // Check if the guess is correct
    if (guess === currentWord.toLowerCase()) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
}