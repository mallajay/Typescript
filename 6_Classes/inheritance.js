"use strict";
class InheritanceUser {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    static eid = "USER";
    static greet() {
        console.log("Hello");
    }
}
class Employee extends InheritanceUser {
    jobTitle;
    constructor(firstName, lastName, jobTitle) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(`${this.fullName} is working as a ${this.jobTitle}`);
    }
}
const employDetail = new Employee("Ajay", "Mall", "Software Engineer");
employDetail.work();
