/* 
ENUM 
*/

enum Role {
  Admin = 1,
  SuberAdmmin = 2,
  User = 3,
  Guest = 4,
}

let userRole: Role = Role.Admin;

/* 
Literal Type
*/
let appRole: "admin" | "editor" = "admin";

let tupelArraya: [1 | -1, number];

/* 
Type Aliases & Custom Type
*/
type UserRoleType = "admin" | "editor" | "guest";

type User = {
  name: string;
  age: number;
  role: UserRoleType;
  permission: string[];
};

function access(role: UserRoleType) {}
