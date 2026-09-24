"use strict";
// Tuples -> A normal array can contain multiple values: 
let data = [1, "Rahul", true];
// But TypeScript doesn't necessarily know the exact position/type you intend.
// A tuple lets you specify the exact type and order:
let user = [
    1,
    "Rahul",
    true
];
// Enums -> An enum lets you create a named set of related values.
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["EMPLOYEE"] = "employee";
    Role["MANAGER"] = "manager";
})(Role || (Role = {}));
let userRole = Role.ADMIN;
console.log(userRole);
const employee_ = {
    id: 1,
    name: "Rahul",
    role: Role.EMPLOYEE
};
console.log(employee_);
