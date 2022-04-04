// Intensity, AbilityUsage, Composure can all be changed to whatever your Metrics you're recording are. Use Control + F2 to change them all at the same time

{ // ------------ Setup ----------------------- //
class Game {
    constructor(intensity, outcome) {
        this.i = intensity + "/100";
        this.o = outcome;
    }
}

class League extends Game {
    constructor(champion, matchup, outcome, intensity, abilityUsage, Composure) {
        super(intensity, outcome);
        super.o = outcome; // Win or Lose
        this.c = champion; // Who I played
        this.m = matchup; // My opponent
        super.i = intensity + "/100";  // My level of intensity
        this.aU = abilityUsage + "/100";  // How was my timing of my abilities this game
        this.cO= Composure + "/100"; // My overall mental composure
        this.historyName = this.c + " " + "vs" + " " + this.m + ", " + this.o +  " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO; // Creates the name for the Feed display
    }

    addFeed() { // Updates the Feed 
        return historyFeed.push(this.historyName);
        }

    addWin() { // Updates global Win/Losses counter
        if (this.o == 'Win') {
            wins++;
        } else {
            losses++;
        }
    }
}

class Camille extends League { // You can also change the name of what champions get their own class
    constructor(matchup, outcome, intensity, abilityUsage, Composure) { // Doesn't take Champion as that is defined 
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

class TFT extends Game {
    constructor(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree) {
        super(intensity, num);
        this.comp = composition;
        super.i = intensity; 
        super.o = num;
        this.lvl = level;
        this.a1 = augmentOne;
        this.a2 = augmentTwo;
        this.a3 = augmentThree;
        this.historyName = this.comp + ", Placement: " + this.o + " Lvl: " + this.lvl + " Augments: " + this.a1 + ", " + this.a2 + ", " + this.a3 + " | Intensity: " + this.i
    }
    addPlacement() {
        if (this.o == 1) {
             firstPlace++;
            return topFour++;
        } else if (this.o < 5) {
            return topFour++;    
        } else {
            return bottomFour++;
        }
    }

    feedTFT() {
        return historyTFT.push(this.historyName);
    }
}


var historyFeed = []; // Creates a blank feed array
var historyTFT = [];
var wins = 0;
var losses = 0;
var topFour = 0;
var firstPlace = 0;
var bottomFour = 0;

function addLeague(champion, matchup, outcome, intensity, abilityUsage, Composure) { // Input function for a new game played
    if (champion == 'Camille') { // If statement to check for Camille
        let game = new Camille (matchup, outcome, intensity, abilityUsage, Composure); // If Champion was Camille create new Camille class object
        game.addFeed();
        game.addWin();
    } else {
        let game = new League (champion, matchup, outcome, intensity, abilityUsage, Composure);
        game.addFeed();
        game.addWin();
    }
}

function addTFT(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree) {
    let game = new TFT (composition, num, level, intensity, augmentOne, augmentTwo, augmentThree)
    game.addPlacement();
    game.feedTFT();

}

function displayHistory() { // Creates display
    for (let i = 0; i < historyFeed.length; i++) { // Inserts space between each individual line
        console.log("");
        console.log(historyFeed[i]);
        console.log("");
        console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
        console.log("");
    }

    console.log("Wins: " + wins +" Losses: " + losses); // Dislays global Win/Loss
    console.log("");
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ");
    console.log("");
}

function displayTFT() { // Creates display
    for (let i = 0; i < historyTFT.length; i++) { // Inserts space between each individual line
        console.log(historyTFT[i]);
        console.log("");
        console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
        console.log("");
    }
    console.log("1st Place: " + firstPlace +" Top Fours: " + topFour + " Bottom Fours:" + bottomFour); // Dislays global Win/Loss
    console.log("");
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ");
    }

// ------------ Setup End ------------------- //
}

{ // ------------ Input ----------------------- //
    // My champion -> Opponent Champion -> Win/Loss -> Intensity -> Ability Usage -> Composure
addLeague('Fiora', 'Mordekaiser', 'Win', 95, 100, 100); // Fiora vs Mordekaiser
addLeague('Camille', 'Graves', 'Win', 95, 80, 95); // Camille vs Graves top
addLeague('Cassiopeia', 'Vex', 'Win', 80, 90, 45); // Cassiopeia vs Vex
addTFT("Syndicate", 2, 7, 95, "Hyper Roll", "Syndicate Crest", "Golden Egg");
addTFT("Mercenary", 1, 4, 94, "So Small", "Theifing rascals", "innovator soul");
  // ------------ Input End ------------------- //
}

displayHistory();
displayTFT();