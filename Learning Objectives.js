{ // Setup
{   // Class Creation
class Champion { // Creates a new Champion 
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
    console.log("");
    for (let abilityIndex = 0; abilityIndex < this.abilities.length; abilityIndex++) {
      console.log("(" + this.abilities[abilityIndex].key + ") " + this.abilities[abilityIndex].name +": Learning Objectives")
      console.log(this.abilities[abilityIndex].learningObjectives);
      console.log("");
    }
  }
}
class Ability { // Creates a new Ability
  constructor(key, name) {
    this.name = name;
    this.key = key;
    this.learningObjectives = [];
  }
  addAbilityObjective(learningObjective) { // Adds learning objectives to the ability
    return this.learningObjectives.push(learningObjective);
  }
}
}   // End of Class Creation
} // End of Setup
{ // Input
{   // Champion Creation
      // Creating a new champion called Camille
var camille = new Champion('Camille', 'Fighter', [], []);
}   // End of Champion Creation
{   // Ability Creation}
      // Adding Camille's abilities to the champion
camille.addAbility("Adaptive Defenses", "P");
camille.addAbility("Precision Protocol", "Q");
camille.addAbility("Tactical Sweep", "W");
camille.addAbility("Hookshot/Wall Dive", "E");
camille.addAbility("The Hextech Ultimatium", "R");
}   // End of Ability Creation
{   // Learning Objective Creation}
      // Adding Learning Objectives to Camille's abilities
camille.abilities[0].addAbilityObjective("Time my trades with my passive cooldown");
}   // End of Learning Objective Creation
} // End of Input
{ // Output
    // Displaying Camille's abilities
camille.displayAbilities();
    // Displaying Camille's Learning Objectives for each ability
camille.displayAbilityObjectives();
} // End of Output
