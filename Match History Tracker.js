// Intensity, AbilityUsage, Composure can all be changed to whatever your Metrics you're recording are. Use Control + F2 to change them all at the same time

{  // ------------ Setup ----------------------- //
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
class Aram extends Game {
    constructor(champion, outcome, intensity, abilityUsage, Composure) {
        super(intensity, outcome, abilityUsage, Composure);
        this.c = champion;
        super.o = outcome;
        super.i = intensity + "/100"; 
        this.aU = abilityUsage + "/100";
        this.cO = Composure + "/100";
        this.historyName = this.c + ", " + this.o +  " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO;
    }
    addAramHistory() {
        if (this.o == 'Win') {
            return aramWins++;
        } else {
            return aramLosses++;    
        }
    }
    feedAram() {
        return historyAram.push(this.historyName);
    }
} 
var wins = 0;
var losses = 0;
var historyFeed = []; // Creates a blank feed array
var firstPlace = 0;
var topFour = 0;
var bottomFour = 0;
var historyTFT = [];
var aramWins = 0;
var aramLosses = 0;
var historyAram = [];
function addNewLeague(champion, matchup, outcome, intensity, abilityUsage, Composure) { // Input function for a new game played
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
function addNewTFT(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree) {
    let game = new TFT (composition, num, level, intensity, augmentOne, augmentTwo, augmentThree)
    game.addPlacement();
    game.feedTFT();

}
function addNewAram(champion, outcome, intensity, abilityUsage, Composure) {
    let game = new Aram (champion, outcome, intensity, abilityUsage, Composure)
    game.addAramHistory();
    game.feedAram();




}
function displayLeague() { // Creates display
    for (let i = 0; i < historyFeed.length; i++) { // Inserts space between each individual line
        console.log(historyFeed[i]);
    }

    console.log("Wins: " + wins +" Losses: " + losses); // Dislays global Win/Loss
    console.log("======================================================================================================================================================");
}
function displayTFT() { // Creates display
    for (let i = 0; i < historyTFT.length; i++) { // Inserts space between each individual line
        console.log(historyTFT[i]);
    }
    console.log("1st Place: " + firstPlace +" Top Fours: " + topFour + " Bottom Fours:" + bottomFour); // Dislays global Win/Loss
    console.log("======================================================================================================================================================");
}
function displayAram() { // Creates display
    for (let i = 0; i < historyAram.length; i++) { // Inserts space between each individual line
        console.log(historyAram[i]);
      }
    console.log("Aram Wins: " + aramWins +" Aram Losses: " + aramLosses); // Dislays global Win/Loss
    console.log("======================================================================================================================================================");
}
}  // ------------ Setup End ------------------- //
{  // ------------ Input ----------------------- //
    // My champion -> Opponent Champion -> Win/Loss -> Intensity -> Ability Usage -> Composure
addNewLeague('Fiora', 'Mordekaiser', 'Win', 95, 100, 100); // Fiora vs Mordekaiser
addNewLeague('Camille', 'Graves', 'Win', 95, 80, 95); // Camille vs Graves top
addNewLeague('Cassiopeia', 'Vex', 'Win', 80, 90, 45); // Cassiopeia vs Vex
addNewTFT("Syndicate", 2, 7, 95, "Hyper Roll", "Syndicate Crest", "Golden Egg");
addNewAram("Rek'Sai", 'Win', 90, 70, 100);
addNewAram("Jhin", 'Win', 100, 95, 100);
addNewLeague("Rek'Sai", 'Graves', 'Win', 80, 90, 90);
addNewLeague('Rell', 'Annie', 'Loss', 80, 40, 60);''
addNewTFT("Hextech", 4, 8, 95, "Knife's Edge 1", "Hextech Crest", "Jeweled Lotus");
}  // ------------ Input End ------------------- //
{  // ------------ Display ----------------------- //}
displayLeague();
displayTFT();
displayAram();
}  // ------------ Display End ------------------- //