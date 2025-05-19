/* 
What is Interface?
- Only availabe in ts
- Object type defination and contract that can be implemented by classes.
*/

interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

/*
What is Declaration Merging in Typescript?

- Declaration Merging in TypeScript is a feature that allows you to combine multiple declarations with the same name into a single definition.
- This is especially useful when working with:
    - Interfaces
    - Namespaces
    - Function + Namespace
    - Class + Namespace
*/

interface Authenticatable {
  role: string;
}

/* Extendig the interface */
interface AdminUser extends Authenticatable {
  adminRole: "admin" | "superAdmin";
}

/* FORCE CLASS TO TAKE SHAPE OF INTERFACE BY USING IMPLEMENTS */
class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public role: string,

    // ADDING EXTRA IS ALSO POSSIBLE
    public userName: string
  ) {}

  login() {}

  logout() {}
}

// Ensuring base type with interface
function authentic(user: Authenticatable) {
  user.login();
}

/* 
NOTE: Interface get not compiled to JavaScript
*/

let user: Authenticatable;

user = {
  email: "test@example.com",
  password: "12356",
  role: "",
  login() {},
  logout() {},
};
