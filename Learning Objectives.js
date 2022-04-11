/* How To use 
1. Create a champion using 'var [name of champion] = new Champion([name of champion], [Champion's Class], [], []);'
2. Add abilities to the champion using '[name of champion].addAbility([name of ability], [ability's key]);'
3. Add learning objectives to the abilities using '[name of champion].abilities[0-3]{passive = 0,ultimate = 3}.addAbilityObjective([Objective description]);'
4. Add learning objectives to the champion 'champion.addChampionObjective([Objective description]);'
5. Display using '[name of champion].[displayAbilities], or [displayAbilityObjectives]();'
*/

class Champion {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.abilities = [];
    this.learningObjectives = [];
  }

  addAbility(name, key) { // Adds ability to the champion
    let ability = new Ability(key, name, this);
    return this.abilities.push(ability);
  }

  addChampionObjective(learningObjective) { // Adds a learning objective to the champion
    return this.learningObjectives.push(learningObjective);
  }

  displayAbilities() { // Displays abilities
    console.log("");
    console.log(this.name + " Abilities: ");
    console.log("");
    for (let abilityIndex = 0; abilityIndex < this.abilities.length; abilityIndex++) {
      console.log("(" + this.abilities[abilityIndex].key + ") " + this.abilities[abilityIndex].name);
      console.log("");
    }
  }

  displayAbilityObjectives() { // Displays learning objectives
    console.log(this.name + ", Learning Objectives: ");
    console.log("");
    for (let abilityIndex = 0; abilityIndex < this.abilities.length; abilityIndex++) {
      console.log("(" + this.abilities[abilityIndex].key + ") " + this.abilities[abilityIndex].name);
      console.log(this.abilities[abilityIndex].learningObjectives);
      console.log("");
    }
  }

}

class Ability {
  constructor(key, name) {
    this.name = name;
    this.key = key;
    this.learningObjectives = [];
  }

  addAbilityObjective(learningObjective) { // Adds learning objectives to the ability
    return this.learningObjectives.push(learningObjective);
  }

}

{ // Input

  { // Champion Creation

    var camille = new Champion('Camille', 'Fighter', [], []);
    var zeri = new Champion('Zeri', 'Marksman', [], []);

  }

  { // Ability Creation

    { // Camille

    camille.addAbility("Adaptive Defenses", "P");
    camille.addAbility("Precision Protocol", "Q");
    camille.addAbility("Tactical Sweep", "W");
    camille.addAbility("Hookshot/Wall Dive", "E");
    camille.addAbility("The Hextech Ultimatium", "R");

    }

    { // Zeri

    zeri.addAbility("Living Battery", "P");
    zeri.addAbility("Burst Fire", "Q");
    zeri.addAbility("Ultrashock Laser", "W");
    zeri.addAbility("Spark Surge", "E");
    zeri.addAbility("Lightining Crash", "R");
    
    }

  }

  { // Learning Objective Creation

    { // Camille}

    camille.abilities[0].addAbilityObjective("Look for trades just before my passive is up to make sure I can get the most out of the sheild.");
    camille.abilities[1].addAbilityObjective("Use Q then W immediately to hide the animation of the Q");
    camille.abilities[2].addAbilityObjective("Use W during my E to reduce the downtime where I can't attack");
    camille.abilities[3].addAbilityObjective("Use E right before I am going to be stunned or knocked up so that I am pulled away during the Stun");
    camille.abilities[4].addAbilityObjective("Wait to use R until Q2 is ready so that I can ensure the true damage on the target and avoid having to sit around waiting for the Q2 to charge");

    }

    { // Zeri

    zeri.abilities[0].addAbilityObjective("Think about the different source of sheilds are in this game and how can I use the movement speed");
    zeri.abilities[1].addAbilityObjective("Try to get my opponent to walk into the path of my Q");
    zeri.abilities[1].addAbilitybObjective("Slow controlled casts are better than fast and inaccurate ones");
    zeri.abilities[1].addAbilityObjective("Use Target champions only to avoid using my passive on Minions");
    zeri.abilities[1].addAbilityObjective("Focus on having a movement command inputted before I press Q to reduce downtime");
    zeri.abilities[2].addAbilityObjective("Use W during E to surprise unsuspecting enemies");
    zeri.abilities[3].addAbilityObjective("Hug near terrain to be able to escape from enemies with E");
    zeri.abilities[3].addAbilityObjective("Try to make the most of the 3 peircing shots after casting E");
    zeri.abilities[4].addAbilityObjective("Make sure to hit at least 1 target with the innital cast of R or you won't get any stacks");
    zeri.abilities[4].addAbilityObjective("Even if you can't fully commit, try to extend the duration of R by getting at least 1 chain lightining onto an enemy");

    }

  }

}

{ // Output

  camille.displayAbilityObjectives();
  zeri.displayAbilityObjectives();

}