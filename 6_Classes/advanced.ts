// Setter, Getter & Method
// TODO
// FIXME:
// REVIEW:
// OPTIMIZE:
// DEBUG:
// DONE:
class AdvanceUser {
  private _firstName: string = "";
  private _lastName: string = "";

  constructor() {}

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid Name");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
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
