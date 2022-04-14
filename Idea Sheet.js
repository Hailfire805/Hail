// I want to make an idea sheet to store my ideas for various things I plan to create, and allows me to record what the various obstacles I encounter are.

class Idea {
  constructor(name, description, category, tags) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.tags = tags;
    this.obstacles = [];
    }

ideaName(ideaCount) {
  this.name + ": " + ideaCount;
  }

addTag(tag) {
  this.tags.push(tag);
  }

changeDescription(newDescription) {
  this.description = newDescription;
  }

changeCategory(newCategory) {
  this.category = newCategory;
  }
}

{ // Variables

var ideaCount = 0;
var ideas = [];
var createdIdeas = [];
}

{ // Function creations

function newIdea(name, description, category, tags) {
  ideas.push(new Idea(name, description, category, tags));
  console.log("Idea Added: " + ideas[(ideaCount)].name);
  ideaCount++;
}

function addObstacle(num, obstacle) {
  switch (num) {
    default:
      ideas[num].obstacles.push(obstacle);
      break;
  }
}

function ideaCreated(num) {
  console.log("Idea Created: " + ideas[num].name);
  switch (num) {
    default:
      createdIdeas.push(ideas[num].name);
      break;
  }
  ideas.splice(num, 1);
}

function displayIdeas() {
  console.log("");
  console.log("Ideas: ");
  for (let ideaIndex = 0; ideaIndex < ideas.length; ideaIndex++) {
    console.log((ideaIndex + 1) + ". " + ideas[ideaIndex].name + " => " + ideas[ideaIndex].description);
  }
}

function displayObstacles() {
  console.log("");
  console.log("Obstacles: ");
  for (let ideaIndex = 0; ideaIndex < ideas.length; ideaIndex++) {
    console.log((ideaIndex + 1) + ". " + ideas[ideaIndex].name + " => " + ideas[ideaIndex].obstacles);
  }
}

function displayCreatedIdeas() {
  console.log("");
  console.log("Created Ideas: ");
  for (let ideaIndex = 0; ideaIndex < createdIdeas.length; ideaIndex++) {
    console.log((ideaIndex + 1) + ". " + createdIdeas[ideaIndex]);
  }
}

function displayAll() {
  displayIdeas();
  displayObstacles();
  displayCreatedIdeas();
}

}

{ // Idea Creation

newIdea("Matchup Tracker", "A tool to track your matchups", "Tool", ["Champion-Specific", "Matchups"]);
newIdea("Champion Mastery Tracker", "A tool to track your champion mastery", "Tool", ["Champion-Specific", "Mastery"]);
newIdea("Self-Improvement Tracker", "A tool to track my personal growth and control", "Tool", ["Self-Improvement"]);
newIdea("Create Block", "function to generate a block of 10 games with outside brackets to condense the data", "function", ["Step reduction", "Match History Tracker" ]);
newIdea("Budget Tracker", "A running and adaptive budget display", "Tool", ["Budget", "Self-Improvement"]);
newIdea("Knowledge Bases", "A collection of knowledge bases to help with various tasks", "Tool", ["Knowledge", "Self-Improvement"]);
}

{ // Obstacle Creation

addObstacle(0, `I need to be able to create seperate champion objects`);
addObstacle(1, `I need to finish this sheet first`);
addObstacle(3, `I need to figure out how to create new code out of my existing code`);
addObstacle(4, `I need to be able to display comparisons between two or more entities`);
addObstacle(5, `How to classify them`);


}

{ // Created Ideas:

ideaCreated(2);
ideaCreated(0);

}

{ // Output

displayAll();

}

// newAcc('Personal Website', 'A program that tracks your personal website', 'Programming', ['JavaScript', 'HTML', 'CSS']);
// newAcc('Personal Blog', 'A program that tracks your personal blog', 'Programming', ['JavaScript', 'HTML', 'CSS']);
// newAcc('Personal Portfolio', 'A program that tracks your personal portfolio', 'Programming', ['JavaScript', 'HTML', 'CSS']);
// newAcc('Personal Resume', 'A program that tracks your personal resume', 'Programming', ['JavaScript', 'HTML', 'CSS']);
// newAcc('Personal CV', 'A program that tracks your personal cv', 'Programming', ['JavaScript', 'HTML', 'CSS']);
// newAcc('To Do List', 'A program that tracks your to do list', 'Programming', ['JavaScript', 'HTML', 'CSS']);
// newAcc('Shopping List', 'A program that tracks your shopping list', 'Programming', ['JavaScript', 'HTML', 'CSS']);