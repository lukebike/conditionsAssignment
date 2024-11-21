// Hälsa användaren
let userName = prompt("Please enter your name");
if (userName) {
  userName = userName.trim();
  if (userName != "") {
    window.alert("Hello " + userName);
  } else {
    window.alert("Username cannot be empty, please try again");
  }
} else {
  window.alert("Invalid name, please try again.");
}

// Jämför två ord

// Be användaren mata in två ord och skriv ut vilket som kommer först i alfabetet.
// 1. Mata in två ord
// Be användaren att mata in två ord med prompt och spara in de i variabler.
let wordOne = prompt("Please enter a word");
let wordTwo = prompt("Please enter a second word");
// 2. Jämför orden
if (wordOne != "" && wordTwo != "") {
  if (wordOne === wordTwo) {
    window.alert("The words are identical.");
  } else {
    let sortedWords = [wordOne, wordTwo];
    sortedWords.sort();
    // Skriv ut vilket som kommer först i alfabetet.
    window.alert(
      `${sortedWords[0]} comes before ${sortedWords[1]} alphabetically`
    );
  }
} else {
  window.alert("Invalid words, please try again.");
}

// Är användaren vuxen
let userAge = prompt("Enter your age");
if (+userAge > 1 && +userAge >= 18) {
  window.alert("You are old enough to use the app");
} else {
  window.alert("You are not old enough to use the app, please try again.");
}
// Gissa ett djur
let randomAnimals = ["Katt", "Hund", "Fågel"];
let guessedAnimal = prompt(
  "Gissa vilket djur jag tänker på (välj en siffra): \r(1) Katt\r(2) Hund\r(3) Fågel"
);
if (+guessedAnimal < 4 && +guessedAnimal > 0) {
  let randomNumber = Math.floor(Math.random() * randomAnimals.length) + 1;
  console.log(randomNumber);
  if (+guessedAnimal === randomNumber) {
    window.alert("Congratulations, you guessed right!");
  } else {
    window.alert("Incorrect guess, try again!");
  }
} else {
  window.alert("Invalid choice, please try again.");
}

/* Känn igen en färg
Skapa ett program som frågar användaren efter deras favoritfärg och om den är "röd", "blå" eller "grön", ge en speciell kommentar för varje färg. */

let userColor = prompt(
  "Please enter your favorite color (WARNING: CASE SENSITIVE): \rRed\rBlue\rGreen"
);
if (userColor != "") {
  if (userColor === "Red") {
    window.alert("Red is a lovely color, good choice!");
  } else if (userColor == "Blue")
    window.alert("Blue is a cool color, good choice!");
  else if (userColor == "Green") {
    window.alert("Green is a cozy color, good choice!");
  } else {
    window.alert(
      "Invalid choice, please pick one of the three available colors"
    );
  }
}

// Godkänd eller inte

let testResult = prompt("Please enter your test result:");
if (+testResult > 0 && +testResult <= 100) {
  if (testResult >= 50) {
    window.alert("Congratulations, you passed the test!");
  } else {
    window.alert("You did not pass the test, better luck next time!");
  }
} else {
  window.alert("Invalid choice, please enter a number within the range 0-100.");
}

// Vad ska vi göra idag?
let dailyActivity = prompt("Is the weather today: \rRainy \rSunny \rCloudy");
if (dailyActivity != "") {
  if (dailyActivity === "Rainy") {
    window.alert("Today is a rainy day, you should do something indoors.");
  } else if (dailyActivity === "Sunny") {
    window.alert(
      "Today is a sunny day, you should go outside and enjoy the sun!"
    );
  } else if (dailyActivity === "Cloudy") {
    window.alert(
      "Today is a cloudy day, it might rain so be sure to take an umbrella when you go outside."
    );
  }
} else {
  window.alert(
    "Invalid choice, please pick one of the three available choices."
  );
}
/* Vilket språk talar du?
Skapa ett program som frågar användaren vilket språk de talar och svarar på olika sätt beroende på om de talar svenska, engelska eller något annat språk. */

let userLanguage = prompt(
  "What is your native language? (WARNING: CASE SENSITIVE): \r(1) English \r(2) Swedish \r(3) Arabic"
);
if (userLanguage && userLanguage != "") {
  if (userLanguage === "English" || +userLanguage === 1) {
    window.alert(
      "English is a valuable language that is widely used all over the world"
    );
  } else if (userLanguage === "Swedish" || +userLanguage === 2) {
    window.alert("Swedish is one of the best sounding Nordic languages");
  } else if (userLanguage === "Arabic" || +userLanguage === 3) {
    window.alert(
      "Arabic is a beautiful language that is used even outside the middle east"
    );
  } else {
    window.alert(
      "Invalid choice, please pick one of the three available languages."
    );
  }
}
/* Multipel av 5?
Skapa ett program som frågar användaren efter ett tal och kollar om talet är en multipel av 5.*/

let userNumber = prompt("Please enter a number:");

if (+userNumber) {
  if (+userNumber.includes("0") || +userNumber.includes("5")) {
    window.alert(
      `${userNumber} belongs to the multplication table of number 5`
    );
  } else {
    window.alert(
      `${userNumber} does not belong to the multiplication table of number 5, try again.`
    );
  }
}

/* Ska vi gå ut?
Använd confirm för att fråga användaren om de vill gå ut och skriv ut ett meddelande beroende på svaret. */

let isGoingOut = confirm("Do you want to go out today?");
if (isGoingOut) {
  window.alert("Today might be a rainy day, make sure to take an umbrella.");
} else {
  window.alert(
    "That's a shame, make sure to enjoy your time inside either way!"
  );
}
