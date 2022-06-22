var helloWorld = "Hello World";

interface User {
    name: string;
    id: number;
}

// const user: User = {
//     name: "Brad",
//     id: 0,
// };

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Hailfire", 1);

function getAdminUser(): User {
    //...
}

function deleteUser(user: User): void {
    // ...
}

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
    }
}
