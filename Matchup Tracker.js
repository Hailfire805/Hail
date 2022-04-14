class Champion {
    constructor(name) {
        this.id = champions.length;
        this.name = name;
        this.matchups = [];
        // this.matchups[this.matchups.length] = 
        //     [
        //         this.matchups[this.matchups.length].wins = 0,
        //         this.matchups[this.matchups.length].losses = 0
    }
}

let champions = [];
let enemies = [];
let championCount = 0;
let enemyCount = 0;

var searchChamps = function (champName) {
    let champid = lookupByName(champName);
    return champid;
}

var searchMatchups = function (champName, enemyName) {
    let champid = searchChamps(champName);
    let enemyid = searchChamps(enemyName);
    console.log("Matchup Search:");
    console.log("  Champion: " + champions[champid]);
    console.log("  Enemy: " + enemies[enemyid]);
    console.log("");
}

function addChamp(ch) {
    let chmp = new Champion(ch);
    console.log("Champion Added:");
    console.log("  " + chmp.name);
    champions.push(chmp.name);
    return ch = chmp.name;
}

function newMatchup(champName, enemy) {
    let enemyid = enemies.indexOf(enemy);
    if (enemyid == -1) {
        enemyid = enemies.length;
        enemies.push(enemy);
        enemyCount++;
        console.log("Matchup Added: ");
        console.log("  " + champions[lookupByName(champName)] + " vs " + enemies[lookupByName(enemy)]);
    } else {
    }
}

function lookupByName(champName) {
    for (let i = 0; i < champions.length; i++) {
        if (champions[i] == champName) {
            let foundid = Number.parseInt(i);
            return foundid;
        } else {
            for (let i = 0; i < enemies.length; i++) {
                if (enemies[i] == champName) {
                    let foundid = Number.parseInt(i);
                    return foundid;
                }
                
            }
        }
    }
}

addChamp("Camille");
newMatchup("Camille", "Jax");
searchMatchups("Camille", "Jax");
