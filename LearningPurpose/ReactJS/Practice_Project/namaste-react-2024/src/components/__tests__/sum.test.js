const { Sum } = require("../Sum")

test("Sum Function calculate the sum of two numbers", () =>{
    const result = Sum(3,4);
    //Assertion
    expect(result).toBe(7)
})