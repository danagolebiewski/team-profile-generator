const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  it("Should create an object with the name, id, and email if provided with valid arguments", () => {
    const employee = new Employee("Dana", 3, "dana.golebiewski@gmail.com");

    expect(employee.name).toEqual("Dana");
    expect(employee.id).toEqual(3);
    expect(employee.email).toEqual("dana.golebiewski@gmail.com");
  });
  // check if arguemtns are provided
  it("should throw an error if no arguments provided", () => {
    const cb = new Employee();

    expect(cb).toThrow();
  });

  // should include a name
  it("should throw an error if not provided a name", () => {
    const cb = () => new Employee(3, "dana.golebiewski@gmail.com"); //is this how it should be written?? I'm going off of activity 16 from class

    const err = new Error("Expected 'name' to be a string");

    expect(cb).toThrow(err);
  });

  // should include an ID
  it("should throw an error if 'id' is not provided", () => {
    const cb = () => new Employee("Dana", "dana.golebiewski@gmail.com");

    const err = new Error("Expect 'ID' to be a non-negative number");

    expect(cb).toThrow(err);
  });

  // should include an email address
  it("Should throw an error if email address in not in the correct format", () => {
    const cb = () => new Employee("Dana", 3);

    const err = new Error("Expect 'email' to be in correct format");

    expect(cb).toThrow(err);
  });
  // name should be a string

  it("Should throw an errror if 'name' is not a string", () => {
    const cb = () => new Employee(Dana, 3, "dana.golebiewski@gmail.com");

    const err = new Error("Expect 'name' to be a string");

    expect(cb).toThrow(err);
  });
  // Id should be a number
  it("Should throw an error if 'id' is not a number", () => {
    const cb = () => new Employee("Dana", "3", "dana.golebiewski@gmail.com");

    const err = new Error("Expect 'ID' to be a number");

    expect(cb).toThrow(err);
  });

  // email should be an email address? Or string?
  it("Should throw and error if 'email' is not in correct format", () => {
    const cb = () => new Employee("Dana", 3, "dana.golebiewski@gmail");

    const err = new Error("Expect 'email' to be a in the correct format");

    expect(cb).toThrow(err);
  });

  // Should throw an error if ID is less than 0
  it("Should throw and error if 'id' is less than 0", () => {
    const cb = () => new Employee("Dana", -1, "dana.golebiewski@gmail");

    const err = new Error("Expect 'id' to be a a non-negative number");

    expect(cb).toThrow(err);
  });
  // should return Employee for role
  it("Should throw an error ")
});


// How do I do the email check?, Do I need a test for returning employee? 
// When I run npm test all of the test docs come up 
// SOmeone had their test files as Employee.test.cjs
// Why don't the links in index.js work?
// index.js importing files problem - multiple ways - neither work 