let wordList = [
    { word: "Placement", synonym: "Put something in a place or position" },
    { word: "Monitor", synonym: "To check or observe the development of someone or something" },
    { word: "Unmindful", synonym: "Not being careful about something" },
    { word: "Watch station", synonym: "A place from where something is observed" },
    { word: "Console", synonym: "To give comfort and sympathy to someone who is sad or disappointed" },
    { word: "Deadly", synonym: "Dangerous" },
    { word: "Task", synonym: "A piece of work to be done" },
    { word: "Accordingly", synonym: "In a way that is suitable or right for the situation" },
    { word: "Martyr", synonym: "A person who sacrifices something of great value like his life for the freedom of his country" },
    { word: "Lemonade", synonym: "A drink that is made from lemons, sugar, and water" },
    { word: "Genocide", synonym: "The systematic killing of a whole nation" },
    { word: "Contribution", synonym: "To do to help produce or achieve something" },
    { word: "Shed", synonym: "To emit and let fall" },
    { word: "Advice", synonym: "Guidance about what someone should do" },
    { word: "Identity", synonym: "The set of qualities that make one person different from others" },
    { word: "Biography", synonym: "Written history of a person's life" },
    { word: "Chronologically", synonym: "Arranged according to the order of time" },
    { word: "Remarkable", synonym: "Worthy of being or likely to be noticed especially as being uncommon or extraordinary" },
    { word: "Anatomy", synonym: "The study of the structure of an animal" },
    { word: "Various", synonym: "Different from one another" },
    { word: "Tolerant", synonym: "Having the ability to accept the differences of opinions and beliefs" },
    { word: "Mock", synonym: "To laugh at someone, often by copying them in a funny but unkind way" },
    { word: "Preference", synonym: "Liking one thing more than another" },
    { word: "Annoyed", synonym: "Angry" },
    { word: "Ashamed", synonym: ["Feeling shame", "disgrace", "guilt" ]},
    { word: "Opinion", synonym: "An idea or belief of a person" }
];

let currentWordIndex = -1;  // Start before the first word
let usedWords = new Set();

function nextWord() {
    let input = document.getElementById("answer").value.trim();

    // Check if the input is empty
    if (input === "" && currentWordIndex !== -1) { // Allow initial load
        alert("Please enter a synonym before proceeding to the next word!");
        return;
    }

    // If all words have been used, reset the quiz
    if (usedWords.size === wordList.length) {
        alert("You've completed all the words!");
        usedWords.clear();
        currentWordIndex = -1;
    }

    // Select a random word that hasn't been used yet
    do {
        currentWordIndex = Math.floor(Math.random() * wordList.length);
    } while (usedWords.has(currentWordIndex));

    usedWords.add(currentWordIndex);

    document.getElementById("word").textContent = wordList[currentWordIndex].word;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    let input = document.getElementById("answer").value.trim();
    let correctAnswer = wordList[currentWordIndex].synonym.toLowerCase();

    if (input.toLowerCase() === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "Incorrect! The correct synonym is: " + correctAnswer;
        document.getElementById("feedback").style.color = "red";
    }
}

// Show the first word when the page loads
window.onload = nextWord;
