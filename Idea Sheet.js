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
}
{ // Function creations
function newIdea(name, description, category, tags) {
  ideas.push(new Idea(name, description, category, tags));
  console.log("Idea Added: " + ideas[(ideaCount)].name);
  ideaCount++;
}
function addObstacle(num, obstacle) {
  switch (num) {
    case 0: 
      ideas[0].obstacles.push(obstacle);
      break;
    case 1:
      ideas[1].obstacles.push(obstacle);      
      break;
    case 2:
      ideas[2].obstacles.push(obstacle);
      break;
    case 3:
      ideas[3].obstacles.push(obstacle);
      break;
    default:
      ideas[num].obstacles.push(obstacle);
      break;
  }
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
}
{ // Idea Creation
newIdea("Matchup Tracker", "A tool to track your matchups", "Tool", ["Champion-Specific", "Matchups"]);
newIdea("Champion Mastery Tracker", "A tool to track your champion mastery", "Tool", ["Champion-Specific", "Mastery"]);
newIdea("Self-Improvement Tracker", "A tool to track my personal growth and control", "Tool", ["Self-Improvement"]);
newIdea("Create Block", "function to generate a block of 10 games with outside brackets to condense the data", "function", ["Step reduction", "Match History Tracker" ]);
}
{ // Obstacle Creation
addObstacle(0, `I need to be able to create seperate champion objects`);
addObstacle(1, `I need to finish this sheet first`);
addObstacle(3, `I need to figure out how to create new code out of my existing code`);
}
{ // Output
displayIdeas();
displayObstacles();
}