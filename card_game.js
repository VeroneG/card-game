const readlineSync = require("readline-sync");

// getInput() is a function that takes a `prompt` as an argument which
// is a question (string) to ask the user.
// the returning value of getInput() is a string of whatever the user has typed as the response

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

// YOUR CODE STARTS HERE!!

// STEP ONE - Building A Deck.


function buildDeck(){

  let suits = ["spades", "clubs", "hearts", "diamonds"]
  
  let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  // 4. inside the buildDeck function, create an empty array called "deck"
  let deck = [];
  // 5. inside the buildDeck function, create a for loop INSIDE of another for loop. The outer loop should loop through the ranks. The inner loop should loop through the suits. Make sure to use different variables for your iterators.
    for(i = 0; i < ranks.length; i++) {
      for(j = 0; j < suits.length; j++) {
  // 6. inside your inner for loop, push your looped iterations of ranks and suits as OBJECTS into the empty deck array. Add a third property to this object with the key "value" and the value equal to the current iterator.
        //  console.log({suit: suits[j], rank: ranks[i], value: i})     
         deck.push({suit: suits[j], rank: ranks[i], value: i})
              
            }//console.log(deck)
      } return deck
    } 

  // STEP TWO - Shuffling your deck
  function shuffle(deck){
    let shuffledDeck = deck;
    let currentIndex = deck.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;
      temporaryValue = shuffledDeck[currentIndex]
      shuffledDeck[currentIndex] = shuffledDeck[randomIndex]
      shuffledDeck[randomIndex] = temporaryValue;
      
    }return deck;
  } console.log(shuffle(buildDeck()))

  // STEP THREE - Greeting the player
  function greet(){
    let name = getInput("Welcome to the game.  What is your name?")

    Console.log(`Hello, ${name}`)
    return name;
  }
  // STEP FOUR - comparing cards
  function compare(card1, card2){
    
    return card1.value - card2.value
  }

  // STEP FIVE - Respond to User Guess
  function guess(card1, card2){
    console.log(card1.ranks.suits) //console.log the rank and suit of the current card
    let input = getInput('Think the next card will be higher (h) or lower (l) than your current card?')
      
        if (input === 'h'){
          return greet() < 0;
        
        }else if (input === 'l'){
          return input > 0
        }else
          {alert('Guess either h or l. You get no points for this round')
            return false;
          }
  }

  // STEP SIX - Let's play!
 function playGame() 
   let deck = shuffle(...)
   let playerName = greet()
   let score = 0;
   let currentCard = deck.pop;
   while (score < 5 && score < deck.length) {
    nextCard = currentCard.pop
    if (guess) {
      score++;
    }
   }

   

  

 