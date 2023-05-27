
let helloWorld = "Hello World";

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}


const user: User = new UserAccount("Hailfire", 1);

function deleteUser(user: User) {
    //...
}

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
}

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}

type StringArray = Array<string>;
type NumberArray = Array<number>;

type ObjectWithNameArray = Array<{ name: string }>;


interface Point {
    x: number;
    y: number;
}


function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}


// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);


const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"


const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"


class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}


const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"


interface Person {
    firstName: string;
    lastName: string;
}


function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


let user2 = { firstName: "Jane", lastName: "User" };


document.body.textContent = greeter(user2);


interface Interest {
    subject: Array<string> | string;
    id: number;
    domain?: string;
    numOfYears?: number;
    focalPoint?: string | Array<string>
}


class DomainOfInterest {
    subject: Array<string> | string;
    id: number;
    coreConcepts: Array<{ name: string, concept: string, id: number }> | object



    constructor(subjects: string, id: number, coreConcepts: Array<{ name: string, concept: string, id: number }> | object) {
        this.subject = subjects;
        this.coreConcepts = coreConcepts;
        this.id = id;
    }
}


let league: Interest = new DomainOfInterest("champion mastery", 1, { name: "farming", concept: "last hit minions to gain gold", id: 1 })
