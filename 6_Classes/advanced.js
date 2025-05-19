"use strict";
// Setter, Getter & Method
class AdvanceUser {
    _firstName = "";
    _lastName = "";
    constructor() { }
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid Name");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid Name");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    static eid = "USER";
    static greet() {
        console.log("Hello");
    }
}
const firstAdUser = new AdvanceUser();
firstAdUser.firstName = "Ajay";
firstAdUser.lastName = " Mall";
console.log(firstAdUser.fullName);
console.log("AdvanceUser", AdvanceUser.eid);
AdvanceUser.greet();
