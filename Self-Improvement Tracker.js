// I want to make a self-improvement tracker that allows me to track my progress towards various self improvement goals.
// I want to have it record what my habits are, what I am doing to improve them, and my progress towards them.
// I want to be able to add new habits and track their progress.
// I want to have it record what I'm trying to avoid, and what I'm doing to avoid them.
// I want to be able to add new things I'm trying to avoid and track their progress.

{ // Classes, Variables, and Functions

class Habit {
  constructor(name, description, tags) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.progress = [];
  }
    addProgress(date, progress) {
        this.progress.push(new Progress(date, progress));
    }
  }
class Progress {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}
class BadHabits {
  constructor(name, description, tags) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.progress = [];
  }
    addProgress(date, progress) {
        this.progress.push(new Progress(date, progress));
  }
}

var myHabits = [];
var myBadHabits = [];

function newHabit(name, description, tags) {
  myHabits.push(new Habit(name, description, tags));
  console.log("Habit Added: " + myHabits[(myHabits.length - 1)].name);
}
function newBadHabit(name, description, tags) {
  myBadHabits.push(new BadHabits(name, description, tags));
  console.log("Bad Habit Added: " + myBadHabits[(myBadHabits.length - 1)].name);
}

function addProgress(type, num, date, description) {
  switch (type) {
    case "Good":
      myHabits[num-1].addProgress(date, description);
      break;
    case "Bad":
      myBadHabits[num-1].addProgress(date, description);
      break;
    default:
      console.log("Error: Invalid Type");
      break;
  }
}

function displayHabits() {
    console.log("");
    console.log("Habits: ");
    for (let habitIndex = 0; habitIndex < myHabits.length; habitIndex++) {
      console.log((habitIndex + 1) + ". " + myHabits[habitIndex].name + " => " + myHabits[habitIndex].description);
    }
    console.log("");
    console.log("Bad Habits: ");
      for (let habitIndex = 0; habitIndex < myBadHabits.length; habitIndex++) {
      console.log((habitIndex + 1) + ". " + myBadHabits[habitIndex].name + " => " + myBadHabits[habitIndex].description);
    }
}
function displayProgress(type, num) {
    if (num == null) {
        switch (type) {
            case "Good":
                for (let habitIndex = 0; habitIndex < myHabits.length; habitIndex++) {
                    console.log("");
                    console.log("Progress for " + myHabits[habitIndex].name + ": ");
                    for (let progressIndex = 0; progressIndex < myHabits[habitIndex].progress.length; progressIndex++) {
                        console.log((progressIndex + 1) + ". " + myHabits[habitIndex].progress[progressIndex].date + " => " + myHabits[habitIndex].progress[progressIndex].description);
                    }
                }
                break;
            case "Bad":
                for (let habitIndex = 0; habitIndex < myBadHabits.length; habitIndex++) {
                    console.log("");
                    console.log("Progress for " + myBadHabits[habitIndex].name + ": ");
                    for (let progressIndex = 0; progressIndex < myBadHabits[habitIndex].progress.length; progressIndex++) {
                        console.log((progressIndex + 1) + ". " + myBadHabits[habitIndex].progress[progressIndex].date + " => " + myBadHabits[habitIndex].progress[progressIndex].description);
                    }
                }
                break;
            }
        } else {
            switch (type) {
                case "Good":
                console.log("");
                console.log("Habit Progress: ");
                console.log(myHabits[num-1].name + ": ");
                for (let progressIndex = 0; progressIndex < myHabits[num-1].progress.length; progressIndex++) {
                    console.log((progressIndex + 1) + ". " + myHabits[num-1].progress[progressIndex].date + " => " + myHabits[num-1].progress[progressIndex].description);
                }
                break;
                case "Bad":
                console.log("");
                console.log("Bad Habit Progress: ");
                console.log(myBadHabits[num-1].name + ": ");
                for (let progressIndex = 0; progressIndex < myBadHabits[num-1].progress.length; progressIndex++) {
                    console.log((progressIndex + 1) + ". " + myBadHabits[num-1].progress[progressIndex].date + " => " + myBadHabits[num-1].progress[progressIndex].description);
                }
                break;
                case "All":
                console.log("");
                console.log("Habit Progress: ");
                for (let habitIndex = 0; habitIndex < myHabits.length; habitIndex++) {
                    console.log(myHabits[habitIndex].name + ": ");
                    for (let progressIndex = 0; progressIndex < myHabits[habitIndex].progress.length; progressIndex++) {
                        console.log((progressIndex + 1) + ". " + myHabits[habitIndex].progress[progressIndex].date + " => " + myHabits[habitIndex].progress[progressIndex].description);
                    }
                }
                console.log("");
                console.log("Bad Habit Progress: ");
                for (let habitIndex = 0; habitIndex < myBadHabits.length; habitIndex++) {
                    console.log(myBadHabits[habitIndex].name + ": ");
                    for (let progressIndex = 0; progressIndex < myBadHabits[habitIndex].progress.length; progressIndex++) {
                        console.log((progressIndex + 1) + ". " + myBadHabits[habitIndex].progress[progressIndex].date + " => " + myBadHabits[habitIndex].progress[progressIndex].description);
                    }
                }
                break;
                default:
                console.log("Error: Invalid Type");
                break;
            }
        }
}
function displayProgressByDate(type, num, date) {
    switch (type) {
        case "Habit":
        console.log("");
        console.log("Habit Progress: ");
        console.log(myHabits[num-1].name + ": ");
        for (let progressIndex = 0; progressIndex < myHabits[num-1].progress.length; progressIndex++) {
            if (myHabits[num-1].progress[progressIndex].date == date) {
                console.log((progressIndex + 1) + ". " + myHabits[num-1].progress[progressIndex].date + " => " + myHabits[num-1].progress[progressIndex].description);
            }
        }
        break;
        case "Bad Habit":
        console.log("");
        console.log("Bad Habit Progress: ");
        console.log(myBadHabits[num-1].name + ": ");
        for (let progressIndex = 0; progressIndex < myBadHabits[num-1].progress.length; progressIndex++) {
            if (myBadHabits[num-1].progress[progressIndex].date == date) {
                console.log((progressIndex + 1) + ". " + myBadHabits[num-1].progress[progressIndex].date + " => " + myBadHabits[num-1].progress[progressIndex].description);
            }
        }
        break;
        default:
        console.log("Error: Invalid Type");
        break;
    }
}

}

{ // Input Habit Creation

newHabit("Sleep", "Getting a proper nights rest", ["Mental Health", "Physicial Health", "Sleep", "Health"]);
newHabit("Exercise", "Physical Activity", ["Physical Health", "Exercise", "Health"]);
newHabit("Meditation", "Mindfulness and reflection", ["Mental Health", "Meditation", "Health"]);
newBadHabit("Vaping", "Vaping affects mine and my pets health", ["Physical Health", "Health"]);
newHabit("Learning to Code", "Learning to code is a great way to learn new things", ["Self-Improvement", "Learning", "Skills"]);
newBadHabit("Sleep Deprivation", "I am not getting enough sleep", ["Mental Health", "Sleep", "Health"]);

displayHabits();

}

{ // Input Progress

addProgress("Good", 1, "04/10/2022", "I slept and feel great");
addProgress("Good", 2, "04/08/2022", "I ran 3 miles and it felt amazing");
addProgress("Good", 3, "04/09/2022", "I actively practiced mindfulness and calming down to avoid an argument");
addProgress("Good", 3, "04/10/2022", "I took a moment to reflect on my life and focus on what is important to me");
addProgress("Good", 4, "04/14/2022", "I finished a SQL course on Databases, and made my matchup tracker");
addProgress("Good", 1, "04/13/2022", "I got a lot of sleep and recovered from a stressful couple of days");
addProgress("Bad", 2, "04/11/2022", "I stayed away from almost 3 days")
addProgress("Good", 4, "04/14/2022", "I finished a Bash course on build a website boilerplate");

}

{ // Display Progress

displayProgress("Good");
displayProgress("Good", 1);

displayProgress("Bad");

}