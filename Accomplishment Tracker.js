class AccTracker {
    constructor(name, description, category, tags) {
      this.name = name;
      this.description = description;
      this.category = category;
      this.tags = tags;
      this.obstacles = [];
      }
  
  accName(accCount) {
    this.name + ": " + accCount;
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
  
  var accCount = 0;
  var accs = [];
  var finishedAccs = [];
  }
  
  { // Function creations
  
  function newAcc(name, description, category, tags) {
    accs.push(new AccTracker(name, description, category, tags));
    console.log("Accomplishment Added: " + accs[(accCount)].name + "  =>  " + accs[(accCount)].description + "  =>  " + accs[(accCount)].category + "  =>  " + accs[(accCount)].tags + "  =>  ");
    accCount++;
  }
     
  function accCreated(num) {
    console.log("Accomplishment Created: " + accs[num].name);
    switch (num) {
      default:
        finishedAccs.push(accs[num].name);
        break;
    }
    accs.splice(num, 1);
  }
  
  function displayAccs() {
    console.log("");
    console.log("Accomplishments: ");
    for (let accIndex = 0; accIndex < accs.length; accIndex++) {
      return console.log((accIndex + 1) + ". " + accs[accIndex].name + " => " + accs[accIndex].description);
    }
  }
  
  function displayCreatedaccs() {
    console.log("");
    console.log("Finished Accomplishments: ");
    for (let accIndex = 0; accIndex < finishedAccs.length; accIndex++) {
      console.log((accIndex + 1) + ". " + finishedAccs[accIndex]);
    }
  }
  
  function displayAll() {
    displayAccs();
    displayObstacles();
    displayCreatedaccs();
  }
  
  }
    newAcc('Finished Accomplishment Tracker', 'A program that tracks your accomplishments', 'Programming', ['JavaScript', 'HTML', 'CSS']);
    newAcc('Idea Sheet', 'A program that tracks your ideas', 'Programming', ['JavaScript', 'HTML', 'CSS']);
    newAcc('Self-Improvement', 'A program that tracks your self-improvement', 'Programming', ['JavaScript', 'HTML', 'CSS']);
    newAcc('Match History Tracker', 'A program that tracks your match history', 'Programming', ['JavaScript', 'HTML', 'CSS']);
    newAcc('Got the Sara spayed', 'Spayed', 'Sara', 'Medical');
    