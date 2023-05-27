var helloWorld = "Hello World";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Hailfire", 1);
function deleteUser(user) {
    //...
}
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
logPoint(point);
var point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
var rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(user2);
var DomainOfInterest = /** @class */ (function () {
    function DomainOfInterest(subjects, id, coreConcepts) {
        this.subject = subjects;
        this.coreConcepts = coreConcepts;
        this.id = id;
    }
    return DomainOfInterest;
}());
var league = new DomainOfInterest("champion mastery", 1, { name: "farming", concept: "last hit minions to gain gold", id: 1 });
