var helloWorld = "Hello World";

interface User {
    name: string;
    id: number;
}
function getAdminUser( user: User) {
    //...
}

function deleteUser(user: User): void {
    // ...
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

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "Unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
}

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    } else {
        return obj;
    }
}

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Champion<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

declare const champion: Champion<string>;

const object = champion.get();

champion.add("Sivir")

message.toLowerCase

const message = "Hello World";
message();

function fn(x) {
    return x.flip();
}

const user = {
    name: "Hailfire",
    age: 25,
};

user.location;

