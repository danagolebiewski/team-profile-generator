const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  it("should be an instance of engineer class", () => {
    expect(new Engineer()).toBeInstanceOf(Engineer);
  });

  it("should create an object keys first name, last name, full name, id, email role", () => {
    const engineer = new Engineer(
      "Dana",
      "Golebiewski",
      5,
      "dana.golebiewski@gmail.com",
      "danagolebiewski"
    );
    engineer.getRole();

    expect(engineer).toEqual({
      firstName: "Dana",
      lastName: "Golebiewski",
      id: 5,
      email: "dana.golebiewski@gmail.com",
      role: "Engineer",
      github: "danagolebiewski",
    });
  });

  it("should create an object with fullName", () => {
    const engineer = new Engineer("Dana", "Golebiewski");
    engineer.getName();

    expect(engineer.fullName).toEqual("Dana Golebiewski");
  });

  it("should create an object with role equal to engineer", () => {
    const engineer = new Engineer("Dana", "Golebiewski");
    engineer.getRole();

    expect(engineer.role).toEqual("Engineer");
  });
});