// I want to make an idea sheet to store my ideas for various things I plan to create
class Idea {
  constructor(name, description, category, tags) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.tags = tags;
    this.ideaName = function() {
      return this.name + ": " + ideaCount;
    }
    this.obstacles = [];
  }
addTag(tag) {
    return this.tags.push(tag);
  }
changeName(newName) {
    this.name = newName;
  }
changeDescription(newDescription) {
    this.description = newDescription;
  }
changeCategory(newCategory) {
    this.category = newCategory;
  }
  addObstacles(obstacles) {
    return this.obstacles.push(obstacles);
  }
}
let ideaCount = 0;
let ideas = [];

function newIdea(name, description, category, tags) {
  ideaCount++;
  let ideaNum = new Idea(name, description, category, tags);
    ideaNum.ideaName = ideaNum.name;
  return ideas.push(ideaNum);
}
newIdea("Matchup Tracker", "A tool to track your matchups", "Tool", ["Champion-Specific", "Matchups"]);

function displayIdeas() {
  console.log("");
  console.log("Ideas: ");
  console.log("");
  for (let ideaIndex = 0; ideaIndex < ideas.length; ideaIndex++) {
    console.log((ideaIndex + 1) + "." + " [" + ideas[ideaIndex].ideaName + "]: " + ideas[ideaIndex].description);
    console.log("");
  }
}
function listObstacles() {
  console.log("");
  console.log("Obstacles: ");
  console.log("");
  for (let ideaIndex = 0; ideaIndex < ideas.length; ideaIndex++) {
    if (ideas[ideaIndex].obstacles == null) {
        console.log((ideaIndex + 1) + "." + " No Obstacles Have Been Identified" + " for " + ideas[ideaIndex].name);
    console.log("");
    } else if (ideaIndex == 0) {
        console.log((ideaIndex + 1) + " Obstacle Identified for " + ideas[ideaIndex].name);
        console.log("");
        for (let obstacleIndex = 0; obstacleIndex < ideas[ideaIndex].obstacles.length; obstacleIndex++) {
            console.log((obstacleIndex + 1) + ". " + ideas[ideaIndex].obstacles[obstacleIndex]);
            console.log("");
        }
    } else {
        console.log((ideaIndex + 1) + " Obstacles Identified for " + ideas[ideaIndex].name);
        console.log("");
        for (let obstacleIndex = 0; obstacleIndex < ideas[ideaIndex].obstacles.length; obstacleIndex++) {
            console.log((obstacleIndex + 1) + ". " + ideas[ideaIndex].obstacles[obstacleIndex]);
            console.log("");
        }
    }
        }
  }

function addObstacle(ideaNum, obstacle) {
  ideas[ideaNum].addObstacles(obstacle);
}
function addTag(ideaNum, tag) {
    ideas[ideaNum].addTag(tag);
}
addObstacle(0, `I need to be able to create seperate champion objects`);
displayIdeas();
listObstacles();