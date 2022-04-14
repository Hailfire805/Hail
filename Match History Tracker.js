{ /* How to Use:
    1. This Tracker can be used to track Aram games, TFT games, or Summoner's Rift games.
    2. To track a game use the function addNew[League/TFT/Aram] followed by the metrics you wish to track.
    3. The default metrics are: 
        For League games: Champion, Matachup, Outcome, AbilityUsage, and Composure
        For TFT games: Composition, Placement, Intensity, Augment one, Augment two, Augment three
        For Aram games: Champion, Outcome, AbilityUsage, and Composure
    */
}
{ // Classes, Functions, and Variables
    class Game { // The root class for any game mode, which only contains my intensity and the outcome
        constructor(intensity, outcome) {
            this.i = intensity + "/100";
            this.o = outcome;
        }
    }
    class League extends Game { // League games are automatically an extension of the game class and they inherit the intensity and outcome properties from the Game class.
        constructor(champion, matchup, outcome, intensity, abilityUsage, Composure) { // Creates a new League game with the metrics of my champion, my opponent's champion, the final outcome of the game, how well I used my abilities, and my mental composure this game
            super(intensity, outcome);
            super.o = outcome; // Did I Win Or Lose?
            this.c = champion; // Who Did I Play?
            this.m = matchup; // Who Was My Opponent?
            super.i = intensity + "/100";  // What Was My Level Of Intensity (0-100)?
            this.aU = abilityUsage + "/100";  // How Well Did I Time My Abilities (0-100)?
            this.cO = Composure + "/100"; // How Much Control Did I Have Over My Mental Composure (0-100)?
            this.historyName = this.c + " " + "vs" + " " + this.m + ", " + this.o + " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO; // Creates the name for the Feed display
        }

        addFeed() { // Updates the League Match History Feed 
            return historyFeed.push(this.historyName);
        }

        addOutcome() { // Updates global Win/Losses counter
            if (this.o == 'Win') {
                wins++;
            } else {
                losses++;
            }
        }

        addMatchupSpread() { // Updates global matchup counter on who I have played against
            if (this.o == 'Loss') {
                return defeats.push(" " + this.m);
            } else {
            }   return victories.push(" " + this.m); 
        }
    }
    class TFT extends Game { // TFT games are automatically an extension of the games class just like League and Aram
        constructor(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree) { // TFT games take a completely different set of inputs than either League or Aram
            super(intensity, num);
            this.comp = composition; // TFT games record what comp I played
            super.i = intensity + "/100"; // The only shared input is intensity
            super.o = num + "/8"; // What was my final placement out of 8
            this.lvl = level + "/9"; // What was my final level out of 9
            this.a1 = augmentOne; // WHat was my first augment
            this.a2 = augmentTwo; // What was my second augment
            this.a3 = augmentThree; // and, What was my third augment
            this.historyName = this.comp + ", Placement: " + this.o + " Lvl: " + this.lvl + " Augments: " + this.a1 + ", " + this.a2 + ", " + this.a3 + " | Intensity: " + this.i // Creates the name for the Feed display
        }
        addPlacement(num) { // Updates global placement counter
            if (num == 1) {  // Checks if I got 1st place
                firstPlace++;
                return topFour++; // Adds 1 to both Top four and first place counters
            } else if (num < 5) { // Checks for Top 4s
                return topFour++;
            } else {
                return bottomFour++;
            }
        }

        feedTFT() { // Pushes new TFT games to the Feed
            return historyTFT.push(this.historyName);
        }
    }
    class Aram extends Game { // Aram games are automatically an extension of the game class
        constructor(champion, outcome, intensity, abilityUsage, Composure) { // Aram games are nearly identical to League games except for they don't record a matchup
            super(intensity, outcome, abilityUsage, Composure);
            this.c = champion;
            super.o = outcome;
            super.i = intensity + "/100"; // Formatting for feed
            this.aU = abilityUsage + "/100"; // Formatting for feed
            this.cO = Composure + "/100"; // Formatting for feed
            this.historyName = this.c + ", " + this.o + " | Intensity: " + this.i + " / Ability Usage: " + this.aU + " / Composure: " + this.cO; // Output formatting 
        }
        addAramHistory() { // Updates global Aram Win/Losses counter
            if (this.o == 'Win') {
                return aramWins++;
            } else {
                return aramLosses++;
            }
        }
        feedAram() { // Updates Aram match history feed
            return historyAram.push(this.historyName);
        }
    }
{ // Variable Declarations
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
    var defeats = [];
    var victories = [];
}

{ // Addition functions
    function addNewLeague(champion, matchup, outcome, intensity, abilityUsage, Composure) { // Input function for new Leeague games
        let game = new League(champion, matchup, outcome, intensity, abilityUsage, Composure); // Records who I played, who I played against, the end outcome, my intensity, how well I used my abilities, and my overall mental composure
        game.addFeed(); // Adds the game to the history array
        game.addOutcome(); // Updates the global win/loss counter
        game.addMatchupSpread(); // Updates the global matchup spread for victories and defeats
    }

    function addNewTFT(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree) { // Input function for new TFT games
        let game = new TFT(composition, num, level, intensity, augmentOne, augmentTwo, augmentThree) // Records my comp, my placement, my level, my intensity, and the different Augments I choose
        game.addPlacement(num); // Adds my placement to global counters
        game.feedTFT(); // Pushes my game to the TFT history array
    }

    function addNewAram(champion, outcome, intensity, abilityUsage, Composure) { // Input funciton for new Aram games
        let game = new Aram(champion, outcome, intensity, abilityUsage, Composure) // Records who I played, the outcome, my intensity, how well I used my abilities, and my overall mental composure
        game.addAramHistory(); // Updates global win/loss counter
        game.feedAram(); // pushes the new game details to the history array
    }

    function addNew(type, parm1, parm2, parm3, parm4, parm5, parm6, parm7) { // Global Input Function for any type of game played
        if (type == 'League') {
            addNewLeague(parm1, parm2, parm3, parm4, parm5, parm6); // Checks the type of game and calls the appropriate function
        } else if (type == 'TFT') {
            addNewTFT(parm1, parm2, parm3, parm4, parm5, parm6, parm7);
        } else if (type == 'Aram') {
            addNewAram(parm1, parm2, parm3, parm4, parm5);
        }
    }
}

{ // Display functions
    function displayLeague() { // Displays League Games Only
        console.log("Summoner's Rift History:"); // Heading for League Games
        console.log("");
        for (let i = 0; i < historyFeed.length; i++) { // Inserts space between each individual line
            console.log(historyFeed[i]);
        }
        console.log("")
        console.log("Summoner's Rift Wins: " + victories.length + " Summoner's Rift Losses: " + defeats.length); // Heading and Win/Loss counter for League Games
        console.log('Victories vs:'); // Heading for Victories
        for (let i = 0; i < victories.length; i++) {
            console.log(victories[i]); // Displays Champions I've won against
        }
        console.log('');
        console.log('Defeats vs:') // Heading for Defeats
        for (let i = 0; i < defeats.length; i++) {
            console.log(defeats[i]); // Displays Champions I've lost against
            
        }
        console.log("=================================================");
    }

    function displayTFT() { // Displays TFT Only
        console.log("TFT History:"); //Heading for TFT
        console.log("");
        for (let i = 0; i < historyTFT.length; i++) { // Inserts space between each individual line
            console.log(historyTFT[i]);
        }
        console.log("")
        console.log("1st Place: " + firstPlace + " Top Fours: " + topFour + " Bottom Fours: " + bottomFour); // Headings for 1st place, top 4s, and bottom 4s in TFT
        console.log("=================================================");
    }

    function displayAram() { // Displays Aram only
        console.log("Aram History:");// Heading for Aram
        console.log("");
        for (let i = 0; i < historyAram.length; i++) { // Inserts space between each individual line
            console.log(historyAram[i]);
        }
        console.log("")
        console.log("Aram Wins: " + aramWins + " Aram Losses: " + aramLosses); // Headings and wins/losses for Aram
        console.log("=================================================");
    }

    function displayAll() { // Combines all possible displays
        displayLeague();
        console.log("");
        displayAram();
        console.log("");
        displayTFT();
    }

}

}

{ // Input Function Calls

{ // Games: 0-100 

{ // Game 01 => Game 10
    addNew('League','Fiora', 'Mordekaiser', 'Win', 95, 100, 100);
    addNew('League','Camille', 'Graves', 'Win', 95, 80, 95); 
    addNew('League','Cassiopeia', 'Vex', 'Win', 80, 90, 45); 
    addNew('TFT', "Syndicates", 2, 7, 95, "Hyper Roll", "Syndicate Crest", "Golden Egg");
    addNew('Aram', "Rek'Sai", 'Win', 90, 70, 100);
    addNew('Aram',"Jhin", 'Win', 100, 95, 100);
    addNew('League',"Rek'Sai", 'Graves', 'Win', 80, 90, 90);
    addNew('League','Rell', 'Annie', 'Loss', 80, 40, 60); ''
    addNew('TFT', "Hextechs", 4, 8, 95, "Knife's Edge 1", "Hextech Crest", "Jeweled Lotus");
    addNew('TFT', "Challengers", 6, 7, 70, "Pandora's Items", "Portable Forge", "Stand United 3");
}

{ // Game 11 => Game 20
    addNew('League',"Aphelios", 'Vayne', 'Loss', 99, 80, 100);
    addNew('League','Camille', 'Dr. Mundo', 'Loss', 100, 100, 20);
    addNew('TFT', "Debonairs", 1, 7, 100, "Future Sight", "Debonair Crest", "Weakspot 2");
    addNew('TFT', 'Innovators', 1, 7, 100, 'Thrill of the Hunt 1', 'Self Repair', 'Second Wind 2');
    addNew('Aram', 'Rell', 'Win', 90, 100, 100);
    addNew('League', 'Qiyanna', 'Gangplank', 'Loss', 70, 50, 50);
    addNew('Aram', 'Samira', 'Loss', 85, 80, 50);
    addNew('League', 'Zeri', 'Yasuo', 'Loss', 90, 80, 75);
    addNew('TFT', 'Socialites', 6, 7, 80, 'Treasure Trove', 'Golden Gifts', 'Archangels Embrace');
    addNew('TFT', 'Strikers', 2, 7, 100, 'Striker Creset', 'Thrill of the Hunt 2', 'Share the Spotlight');
}

{ // Game 21 => Game 30
    addNew('TFT', 'Snipers', 3, 8, 100, 'Hyper Roll', 'Meditation 2', 'Item Grab bag');
    addNew('Aram', 'Sona', 'Loss', 100, 85, 90);
    addNew('TFT', 'Syndicates', 5, 8, 100, 'Hyper Roll');
    addNew('Aram', 'Dr. Mundo', 'Loss', 70, 90, 100);
    addNew('League', 'Camille', 'Riven', 'Loss', 30, 30, 10);
    addNew('League', 'Irelia', 'Garen', 'Win', 100, 90, 100);
    addNew('TFT', 'Hextech', 8, 7, 60, 'Blue Battery 2', 'Battlemage 2', 'Jeweled Lotus');
    addNew('League', 'Soraka', 'Pyke', 'Win', 100, 100, 100);
    addNew('League', 'Alistar', 'Karma', 'Loss', 90, 80, 80);
    addNew('League', 'Janna', 'Zilean', 'Win', 100, 110, 90);
}

{ // Game 31 => Game 40
    addNew('TFT', 'Innovators', 2, 7, 100, 'The Rich Get Richer', 'Self Repair', 'Innovator Heart');
    addNew('TFT', 'Debonairs', 4, 7, 60, 'Ludens Echo', 'Thrill of the Hunt 1', 'Tri Force 2');
    addNew('TFT', 'Syndicates', 3, 7, 100, 'Blue Battery 1', 'Underdogs', 'Woodland Trinket');
    addNew('League', 'Camille', 'Fiora', 'Win', 90, 95, 110);
    addNew('League', 'Cassiopeia', 'Graves', 'Win', 100, 100, 100);
    addNew('Aram', 'Senna', 'Win', 100, 100, 100);
    addNew('League', 'Samira', 'Jinx', 'Loss', 80, 80, 100);
    addNew('TFT', 'Inovators', 4, 8, 80, 'Treasure Trove', 'Luden\'s Echo', 'Archangel\'s staff');
    addNew('TFT', 'Chemtechs', 3, 7,     85, 'Electrocharge 2', 'Chemtech Soul', 'Diseintegtrator 2');
    addNew('TFT', 'Yordles', 4, 7, 100, 'Band of Theives', 'Four Score', 'So Small');
    
}

{ // Game 41 => Game 50
    addNew('Aram', 'Vladimir', 'Loss', 80, 90, 90);
    addNew('Aram', 'Ziggs', 'Win', 100, 100, 100);
    addNew('League', 'Yone', 'Akshan', 'Loss', 70, 60, 40);
    addNew('League', 'Camille', 'Gragas', 'Loss', 100, 100, 800);
    addNew('Aram', 'Kog\'Maw', 'Win', 90, 80, 100);
    addNew('TFT', 'Hextechs', 3, 7, 80, 'Knife\'s Edge 2', 'Recombobularor', 'Portable Forge');
    addNew('Aram', 'Lucian', 'Win', 100, 100, 100);
    addNew('TFT', 'Chemtechs', 4, 7, 90, 'Luden\'s Echo 2 ', 'Chemical Overload 1', 'Titanic Force');
    addNew('TFT', 'Mercenary', 4, 8, 100, 'Ancient Archives', 'Gold Reserves', 'Weakpoints 2')
    addNew('TFT', 'Debonairs', 4, 8, 110, 'Luden\'s Echo', 'Treasure Trove', 'Sniper Crest');

}

{ // Game 51 => Game 60
    addNew('Aram', 'Orianna', 'Loss', 70, 50, 70);
    addNew('League', 'Zeri', 'Draven', 'Win', 90, 70, 80);
    addNew('League', 'Irelia', 'Akali', 'Win', 90, 40, 20);
    addNew('League', 'Lillia', 'Amumu', 'Loss', 100, 50, 40);
    addNew('League', 'Yone', 'Jayce', 'Win', 100, 90, 90);
    addNew('League', 'Rengar', 'Riven', 'Loss', 30, 90, 5);
    addNew('TFT', 'Chemtechs', 4, 6, 90, 'Tri-force 1', 'Challenger Heart', 'Golden Egg');
    addNew('TFT', 'Mutants', 7, 7, 80, 'Archangel\'s Embrace', 'Blue Battery', 'Thrill of the Hunt 2');
}

}
}

{ // Output Function Calls
displayAll(); // Displays all possible Data
// displayLeague(); // Displays League Data
// displayTFT(); // Displays TFT Data
// displayAram(); // Displays Aram Data
}