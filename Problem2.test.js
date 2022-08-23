const fibonacci = require("./Problem2")

describe("fibonacci", () => {
    it("Bilangan fibonacci", () => {
        expect(fibonacci(9)).toBe(34);
    })
})