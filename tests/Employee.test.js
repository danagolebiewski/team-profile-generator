const Employee = require ("../lib/Employee.js");

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

  // should include an ID in the form of a number 
  it("should throw an error if 'id'  ")


  // should include an email address 

  // name should be a string

// Id should be a number 

// email should be an email address? Or string?

// Should throw an error if ID is less than 0 
})
