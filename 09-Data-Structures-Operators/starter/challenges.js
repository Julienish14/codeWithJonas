'use strict';
/////////////////////////////////
//Data Structures, Modern Operators and Strings
//Coding Challenge #1
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team(variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array'allPlayers'containing all players of both teams(22 players)
4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object,create one variable for each odd(called 'team1', 'draw' and 'team2')
6. Write a function('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely towin. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK😀

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
//Ans 1
const [players1, player2] = game.players;
console.log(players1, player2);

//Ans 2
const [gk, ...fieldPlayers] = game.players[0];

//Jonas Ans
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);

//Ans 3
const allPlayers = [...game.players[0], ...game.players[1]];

//Jonas Ans
const allPlayerss = [...players1, ...player2];
console.log(allPlayers);

//Ans 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//Ans 5
// const { team1, draw, team2 } = game.odds; //Failed

//Jonas Ans
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//Ans 6
function printGoals(...players) {
  console.log(`Players names: ${players}`);
  console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Lewandowski', 'Kimmich');

printGoals(...game.scored);

//Ans 7
team1 < team2 && console.log('Team one is more likely to win');
team1 > team2 && console.log('Team Two is more likely to win');

*/

//2.4
//Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);

console.log(title, author);
*/
//2.5
/* Each book object has a deeply nested rating property as illustrated below:
{
    title: 'Algorithms',
    ...
    thirdParty: {
      goodreads: {
        rating: 4.41,              // <-- HERE
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    }
  },