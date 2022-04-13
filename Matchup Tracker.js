//Matchup Tracker - Champions

class Matchup {
    constructor(champion, enemy) {
        this.champion = champion;
        this.enemy = enemy;
        this.wins = 0;
        this.losses = 0;
    }
    addWin() {
        this.wins++;
    }
    addLoss() {
        this.losses++;
    }
    checkMatchup(nameA, nameE) {
        if (nameA == this.champion && nameE == this.enemy) {
            return true;
        }else {
            return false;
        }
    }
}
class Champion extends Matchup{
    constructor(name, position) {
        super(name, position);
        this.name = name;
        this.position = position;
        this.matchups = [];
        this.wins = 0
        this.losses = 0
    }
    addMatchup(enemy) {
        this.matchups.push(new Matchup(this.name, enemy));
    }
    addWin(enemy, champion) {
        for (let i = 0; i < this.matchups.length; i++) {
            if (this.matchups[i].checkMatchup(this.name, enemy) && this.matchups[i].checkMatchup(this.name, champion)) {
                this.matchups[i].addWin();
            }
        }
    }
    addLoss(enemy, champion) {
        for (let i = 0; i < this.matchups.length; i++) {
            if (this.matchups[i].checkMatchup(this.name, enemy) && this.matchups[i].checkMatchup(this.name, champion)) {
                this.matchups[i].addLoss();
            }
        }
    }
    getWinRate(enemy) {
        switch (enemy) {
            default: {
                let winRate = this.matchups[enemy].wins / (this.matchups[enemy].wins + this.matchups[enemy].losses);
                return winRate;
            }
        }
    }
}

class Enemy extends Champion {
    constructor(name, position) {
        super(name, position);
    }
}

let champions = [];
let enemies = [];
let championCount = 0;
let enemyCount = 0;

function newChampion(name, position) {
    let champName = new Champion(name, position);
    championCount++;
    console.log("Champion Added: " + champName.name + " champID: " + championCount);
    champions.push(champName);
}

function newEnemy(name, position) {
    let enemyName = new Enemy(name, position);
    enemyCount++;
    console.log("Enemy Added: " + enemyName.name + " enemyID: " + enemyCount);
    enemies.push(enemyName);
}
function prompt() {
    let prompt = require('prompt-sync')();
    let name = prompt("Enter a name: ");
    let position = prompt("Enter a position: ");
    return [name, position];


function addWin() {
    let champName = prompt("Enter a champion name: ", "Champion Name");
    let feedback = champName;
    let enemyName = prompt("Enter Enemy Name");
    let feedebackEnemy = enemyName;
    for (let i = 0; i < champions.length; i++) {
        if (champions[i].name == champName) {
            champions[i].addWin(feedebackEnemy, feedback);
        }
    }
}

function addLoss() {
    let champName = prompt("Enter Champion Name");
    let enemyName = prompt("Enter Enemy Name");
    for (let i = 0; i < champions.length; i++) {
        if (champions[i].name == champName) {
            champions[i].addLoss(enemyName, champName);
        }
    }
}
function getWinRate() {
    let champName = prompt("Enter Champion Name");
    let enemyName = prompt("Enter Enemy Name");
    for (let i = 0; i < champions.length; i++) {
        if (champions[i].name == champName) {
            console.log(champions[i].getWinRate(enemyName));
        }
    }
}

function addMatchup() {
    let champName = window.prompt("Enter Champion Name", "Champion Name");
    let enemyName = window.prompt("Enter Enemy Name", "Enemy Name");
    for (let i = 0; i < champions.length; i++) {
        if (champions[i].name == champName) {
            champions[i].addMatchup(enemyName);
        }
    }
}

newChampion("Camille", "Top");
newEnemy("Mordekaiser");
addWin();
addLoss();
getWinRate();