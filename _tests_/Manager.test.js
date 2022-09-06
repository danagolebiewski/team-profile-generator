const Manager = require("../lib/manager.js");

describe("Manager", () => {
  it("should be an instance of manager class", () => {
    expect(new Manager()).toBeInstanceOf(Manager);
  });

  it("should create an object keys first name, last name, id, email, role", () => {
    const manager = new Manager(
      "Dana",
      "Golebiewski",
      5,
      "dana.golebiewski@gmail.com",
      "Manager"
    );
    manager.getRole();

    expect(manager).toEqual({
      firstName: "Dana",
      lastName: "Golebiewski",
      id: 5,
      email: "dana.golebiewski@gmail.com",
      role: "Manager",
      officenumber: 66,
    });
  });

  it("should create an object with fullName", () => {
    const manager = new Manager("Dana", "Golebiewski");
    manager.getName();

    expect(manager.fullName).toEqual("Dana Golebiewski");
  });

  it("should create an object with role equal to manager", () => {
    const manager = new Manager("Dana", "Golebiewski");
    manager.getRole();

    expect(manager.role).toEqual("Manager");
  });
});