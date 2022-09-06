const Intern = require("../lib/intern.js");

describe("Intern", () => {
  it("should be an instance of intern class", () => {
    expect(new Intern()).toBeInstanceOf(Intern);
  });

  it("should create an object keys first name, last name, id, email, role", () => {
    const intern = new Intern(
      "Dana",
      "Golebiewski",
      5,
      "dana.golebiewski@gmail.com",
      "Intern"
    );
    intern.getRole();

    expect(intern).toEqual({
      firstName: "Dana",
      lastName: "Golebiewski",
      id: 5,
      email: "dana.golebiewski@gmail.com",
      role: "Intern",
      school: "DU",
    });
  });

  it("should create an object with fullName", () => {
    const intern = new Intern("Dana", "Golebiewski");
    intern.getName();

    expect(intern.fullName).toEqual("Dana Golebiewski");
  });

  it("should create an object with role equal to intern", () => {
    const intern = new Intern("Dana", "Golebiewski");
    intern.getRole();

    expect(intern.role).toEqual("Intern");
  });
});