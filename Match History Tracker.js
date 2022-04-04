// Intensity, AbilityUsage, Composure can all be changed to whatever your Metrics you're recording are. Use Control + F2 to change them all at the same time

{ // ------------ Setup ----------------------- //
class Game {
    constructor(champion, matchup, outcome, intensity, abilityUsage, Composure) {
        this.o = outcome; // Win or Lose
        this.c = champion; // Who I played
        this.m = matchup; // My opponent
        this.i = intensity + "/100";  // My level of intensity
        this.aU = abilityUsage + "/100";  // How was my timing of my abilities this game
        this.cO= Composure + "/100"; // My overall mental composure
        this.historyName = this.c + " " + "vs" + " " + this.m + ", " + this.o +  " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO; // Creates the name for the Feed display
    }

    addFeed() { // Updates the Feed 
        return historyFeed.push(this.historyName);
        }

    addWin() { // Updates global Win/Losses counter
        if (this.outcome = 'Win') {
            return wins++;
        } else {
            return losses++;
        }
    }
}

class Camille extends Game { // You can also change the name of what champions get their own class
    constructor(matchup, outcome, intensity, abilityUsage, Composure) { // doesn't take Champion as that is defined 
        super(matchup, outcome, intensity, abilityUsage, Composure) // Calls super() to access the properties of the parent class
        super.c = "Camille"; // This take the champion property from Game and sets it to Camille
        this.m = matchup;
        this.o = outcome;
        this.i = intensity + "/100";
        this.aU = abilityUsage + "/100";
        this.cO = Composure + "/100"; 
        super.historyName = this.c + " " + "vs" + " " + this.m + ", " + this.o +  " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO; // Sets the name of the game to "Camille vs Matchup, Outcome" followed by my metrics I'm tracking
    }
}

var historyFeed = []; // Creates a blank feed array
var wins = 0;
var losses = 0;

function addGame(champion, matchup, outcome, intensity, abilityUsage, Composure) { // Input function for a new game played
    if (champion == 'Camille') { // If statement to check for Camille
        let game = new Camille (matchup, outcome, intensity, abilityUsage, Composure); // If Champion was Camille create new Camille class object
        game.addFeed();
        game.addWin();
    } else {
        let game = new Game (champion, matchup, outcome, intensity, abilityUsage, Composure);
        game.addFeed();
        game.addWin();
    }
}

function displayHistory() { // Creates display
    for (let i = 0; i < historyFeed.length; i++) { // Inserts space between each individual line
        console.log(historyFeed[i]);
        console.log("----")
    }
    console.log("Wins: " + wins +" Losses: " + losses); // Dislays global Win/Loss
    }

  // ------------ Setup End ------------------- //
}

{ // ------------ Input ----------------------- //
    // My champion -> Opponent Champion -> Win/Loss -> Intensity -> Ability Usage -> Composure
addGame('Fiora', 'Mordekaiser', 'Win', 95, 100, 100); // Fiora vs Mordekaiser
addGame('Camille', 'Graves', 'Win', 95, 80, 95); // Camille vs Graves top
addGame('Cassiopeia', 'Vex', 'Win', 80, 90, 45); // Cassiopeia vs Vex

  // ------------ Input End ------------------- //
}

displayHistory();
