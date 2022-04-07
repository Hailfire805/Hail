{   /* How to Use:
    1. This Tracker can be used to track Aram games, TFT games, or Summoner's Rift games.
    2. To track a game use the function addNew[League/TFT/Aram] followed by the metrics you wish to track.
    3. The default metrics are: 
        For League games: Champion, Matachup, Outcome, AbilityUsage, and Composure
        For TFT games: Composition, Placement, Intensity, Augment one, Augment two, Augment three
        For Aram games: Champion, Outcome, AbilityUsage, and Composure
    4. To track a specific champion, Change lines: 44, 47, 128 and 129 from Camille and 56, 59, 132, and 133 from Zeri to your desired champion's name.
    5. To add more than two champions Copy lines 45 through 56 and paste them on line 57. Then, copy lines 133 through 136 and paste them on line 137.
    6. Intensity, AbilityUsage, Composure can all be changed to whatever your Metrics you're recording are. Use Control + F2 to change them all at the same time.
    7. To output your history to the console, uncomment lines 196 through 198 according to what you are wanting to display
    */
}
{   // Setup
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
            this.cO = Composure + "/100"; // My overall mental composure
            this.historyName = this.c + " " + "vs" + " " + this.m + ", " + this.o + " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO; // Creates the name for the Feed display
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
            super.historyName = this.c + " " + "vs" + " " + this.m + ", " + this.o + " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO; // Sets the name of the game to "Camille vs Matchup, Outcome" followed by my metrics I'm tracking
        }
    }
    class Zeri extends League { // You can also change the name of what champions get their own class
        constructor(matchup, outcome, intensity, abilityUsage, Composure) { // Doesn't take Champion as that is defined 
            super(matchup, outcome, intensity, abilityUsage, Composure) // Calls super() to access the properties of the parent class
            super.c = "Zeri"; // This take the champion property from Game and sets it to Camille
            this.m = matchup;
            this.o = outcome;
            this.i = intensity + "/100";
            this.aU = abilityUsage + "/100";
            this.cO = Composure + "/100";
            super.historyName = this.c + " " + "vs" + " " + this.m + ", " + this.o + " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO; // Sets the name of the game to "Camille vs Matchup, Outcome" followed by my metrics I'm tracking
        }
    }
    class TFT extends Game {
        constructor(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree) {
            super(intensity, num);
            this.comp = composition;
            super.i = intensity + "/100";
            super.o = num + "/8";
            this.lvl = level + "/9";
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
            this.historyName = this.c + ", " + this.o + " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO;
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
    // Creating Variables used to track results
    var wins = 0;
    var losses = 0;
    var historyFeed = [];
    var firstPlace = 0;
    var topFour = 0;
    var bottomFour = 0;
    var historyTFT = [];
    var aramWins = 0;
    var aramLosses = 0;
    var historyAram = [];

    function addNewLeague(champion, matchup, outcome, intensity, abilityUsage, Composure) { // Input function for a new game played
        if (champion == 'Camille') { // If statement to check for Camille
            let game = new Camille(matchup, outcome, intensity, abilityUsage, Composure); // If Champion was Camille create new Camille class object
            game.addFeed();
            game.addWin();
        } else if (champion == 'Zeri') { // If statement to check for Zeri
            let game = new Zeri(champion, matchup, outcome, intensity, abilityUsage, Composure);
            game.addFeed();
            game.addWin();
        } else { // If Champion was not Camille or Zeri create new League class object
            let game = new League(champion, matchup, outcome, intensity, abilityUsage, Composure);
            game.addFeed();
            game.addWin();
        }
    }
    function addNewTFT(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree) {
        let game = new TFT(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree)
        game.addPlacement();
        game.feedTFT();

    }
    function addNewAram(champion, outcome, intensity, abilityUsage, Composure) {
        let game = new Aram(champion, outcome, intensity, abilityUsage, Composure)
        game.addAramHistory();
        game.feedAram();




    }
    function addNew(type, parm1, parm2, parm3, parm4, parm5, parm6, parm7) {
        if (type == 'League') {
            addNewLeague(parm1, parm2, parm3, parm4, parm5, parm6);
        } else if (type == 'TFT') {
            addNewTFT(parm1, parm2, parm3, parm4, parm5, parm6, parm7);
        } else if (type == 'Aram') {
            addNewAram(parm1, parm2, parm3, parm4, parm5);
        }
    }
    function displayLeague() { // Creates display
        console.log("Summoner's Rift History:");
        console.log("");
        for (let i = 0; i < historyFeed.length; i++) { // Inserts space between each individual line
            console.log(historyFeed[i]);
        }
        console.log("")
        console.log("Summoner's Rift Wins: " + wins + " Summoner's Rift Losses: " + losses); // Dislays global Win/Loss
        console.log("=================================================");
    }
    function displayTFT() { // Creates display
        console.log("TFT History:");
        console.log("");
        for (let i = 0; i < historyTFT.length; i++) { // Inserts space between each individual line
            console.log(historyTFT[i]);
        }
        console.log("")
        console.log("1st Place: " + firstPlace + " Top Fours: " + topFour + " Bottom Fours:" + bottomFour); // Dislays global Win/Loss
        console.log("=================================================");
    }
    function displayAram() { // Creates display
        console.log("Aram History:");
        console.log("");
        for (let i = 0; i < historyAram.length; i++) { // Inserts space between each individual line
            console.log(historyAram[i]);
        }
        console.log("")
        console.log("Aram Wins: " + aramWins + " Aram Losses: " + aramLosses); // Dislays global Win/Loss
        console.log("=================================================");
    }
    function displayAll() { // Creates display
        displayLeague();
        console.log("");
        displayAram();
        console.log("");
        displayTFT();
    }
}   // End of Setup
{   // Input
    // My champion -> Opponent Champion -> Win/Loss -> Intensity -> Ability Usage -> Composure
    addNew('League','Fiora', 'Mordekaiser', 'Win', 95, 100, 100);
    addNew('League','Camille', 'Graves', 'Win', 95, 80, 95); 
    addNew('League','Cassiopeia', 'Vex', 'Win', 80, 90, 45); 
    addNew('TFT', "Syndicate", 2, 7, 95, "Hyper Roll", "Syndicate Crest", "Golden Egg");
    addNew('Aram', "Rek'Sai", 'Win', 90, 70, 100);
    addNew('Aram',"Jhin", 'Win', 100, 95, 100);
    addNew('League',"Rek'Sai", 'Graves', 'Win', 80, 90, 90);
    addNew('League','Rell', 'Annie', 'Loss', 80, 40, 60); ''
    addNew('TFT', "Hextech", 4, 8, 95, "Knife's Edge 1", "Hextech Crest", "Jeweled Lotus");
    addNew('TFT', "Challenger Enforcer", 6, 7, 70, "Pandora's Items", "Portable Forge", "Stand United 3");
    addNew('League',"Aphelios", 'Vayne', 'Loss', 99, 80, 100);
    addNew('League','Camille', 'Dr. Mundo', 'Loss', 100, 100, 20);
    addNew('TFT', "Debonair", 1, 7, 100, "Future Sight", "Debonair Crest", "Weakspot 2");
    addNew('TFT', 'Innovator', 1, 7, 100, 'Thrill of the Hunt 1', 'Self Repair', 'Second Wind 2');
}   // End of Input
{   // Output
displayAll();
}   // End of Output